import { type ClientEvents } from 'discord.js';
import { readdir, stat } from 'fs/promises';
import path from 'node:path';
import type DiscordClientEvent from '../classes/DiscordClientEvent';
import type JadeClient from '../classes/JadeClient';
import { type CommandInteractionType, type MessageComponentInteractionType, type ModalSubmitInteractionType } from '../typings/interaction';

// Discord Client Event Handler Loader
async function loadDiscordClientEventHandlers(mainPath: string, client: JadeClient): Promise<void> {
  if ((await stat(mainPath)).isDirectory()) {
    const files = await readdir(path.resolve(mainPath));
    for (const file of files) {
      if (file.endsWith('.ts') || file.endsWith('.js')) {
        const eventModule = await import(path.resolve(mainPath, file));
        const event: DiscordClientEvent<keyof ClientEvents> = eventModule.default;
        client.on(event.eventName, (...args) => event.listener(client, ...args));
        delete require.cache[require.resolve(path.resolve(mainPath, file))];
      }
    }
  }
}

// Discord Application Command Handler Loader
async function loadApplicationCommandHandlers(mainPath: string, client: JadeClient): Promise<void> {
  if ((await stat(mainPath)).isDirectory()) {
    const files = await readdir(path.resolve(mainPath));
    for (const file of files) {
      const filePath = path.resolve(mainPath, file);
      const stats = await stat(filePath);

      if (stats.isDirectory()) {
        await loadApplicationCommandHandlers(filePath, client);
      } else if ((file.endsWith('.js') || file.endsWith('.ts')) && !file.endsWith('.d.ts')) {
        const fileData = (await import(filePath)).default as CommandInteractionType;
        client.applicationCommands.set(fileData.name, fileData);
        delete require.cache[require.resolve(filePath)];
      }
    }
  }
}

// Discord Message Component Handler Loader
async function loadMessageComponentHandlers(mainPath: string, client: JadeClient): Promise<void> {
  if ((await stat(mainPath)).isDirectory()) {
    const files = await readdir(path.resolve(mainPath));
    for (const file of files) {
      const filePath = path.resolve(mainPath, file);
      const stats = await stat(filePath);

      if (stats.isDirectory()) {
        await loadMessageComponentHandlers(filePath, client);
      } else if ((file.endsWith('.js') || file.endsWith('.ts')) && !file.endsWith('.d.ts')) {
        const fileData = (await import(filePath)).default as MessageComponentInteractionType;
        client.messageComponents.set(fileData.customId, fileData);
        delete require.cache[require.resolve(filePath)];
      }
    }
  }
}

// Discord Modal Submission Handler Loader
async function loadModalSubmissionHandlers(mainPath: string, client: JadeClient): Promise<void> {
  if ((await stat(mainPath)).isDirectory()) {
    const files = await readdir(path.resolve(mainPath));
    for (const file of files.filter((fileName) => (fileName.endsWith('.js') || fileName.endsWith('.ts')) && !fileName.endsWith('.d.ts'))) {
      const modalData = (await import(path.resolve(mainPath, file))).default as ModalSubmitInteractionType;
      client.modalSubmissions.set(modalData.customId, modalData);
      delete require.cache[require.resolve(path.resolve(mainPath, file))];
    }
  }
}

export async function loadHandlers (client: JadeClient): Promise<void> {
  await Promise.all([
    loadDiscordClientEventHandlers(path.join(__dirname, '../events'), client),
    loadApplicationCommandHandlers(path.join(__dirname, '../interactions/applicationCommands'), client),
    loadMessageComponentHandlers(path.join(__dirname, '../interactions/messageComponents'), client),
    loadModalSubmissionHandlers(path.join(__dirname, '../interactions/modalSubmissions'), client)
  ])
};
