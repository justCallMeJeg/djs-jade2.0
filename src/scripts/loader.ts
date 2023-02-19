import { type ClientEvents } from 'discord.js'
import { readdir, stat } from 'fs/promises'
import path from 'node:path'
import type DiscordClientEvent from '../classes/DiscordClientEvent'
import type JadeClient from '../classes/JadeClient'
import { type ApplicationCommandInteractionType } from '../typings/interaction'

// Discord Client Event Handler Loader
async function discordClientEventHandlers (paths: string, client: JadeClient): Promise<void> {
  if ((await stat(paths)).isDirectory()) {
    (await readdir(path.resolve(paths))).filter((name: string) => name.endsWith('.ts') || name.endsWith('.js')).forEach(async (file: string) => {
      const event: DiscordClientEvent<keyof ClientEvents> = ((await import(path.resolve(paths, file)))?.default)
      client.on(event.eventName, async (...args) => event.listener(client, ...args))
      delete require.cache[require.resolve(path.resolve(paths, file))]
    })
  };
};

// Chat Input Command Interaction Handler Loader
async function chatInputCommandInteractionHandlers (paths: string, client: JadeClient): Promise<void> {
  if ((await stat(paths)).isDirectory()) {
    (await readdir(path.resolve(paths))).filter((name: string) => name.endsWith('.ts') || name.endsWith('.js')).forEach(async (file: string) => {
      const command: ApplicationCommandInteractionType = (await import(path.resolve(paths, file)))?.default
      client.applicationCommands.set(command.name, command)
      delete require.cache[require.resolve(path.resolve(paths, file))]
    })
  }
}

export async function loadHandlers (client: JadeClient): Promise<void> {
  await Promise.all([
    discordClientEventHandlers(path.join(__dirname, '../events'), client),
    chatInputCommandInteractionHandlers(path.join(__dirname, '../interactions/chatInputCommands'), client)
  ])
};
