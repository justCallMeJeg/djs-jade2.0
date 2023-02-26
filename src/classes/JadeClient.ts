/**
 * @file JadeClient
 * @description Connects to Discord and handles global functions
 */
import { PrismaClient } from '@prisma/client';
import { Client, Collection, GatewayIntentBits, Partials } from 'discord.js';
import { type Logger } from 'pino';
import { loadHandlers } from '../scripts/loader';
import { type CommandInteractionType, type MessageComponentInteractionType, type ModalSubmitInteractionType } from '../typings/interaction';
import { logger } from '../utils/logger';

export default class JadeClient extends Client {
  // Interactions
  public readonly applicationCommands = new Collection<string, CommandInteractionType>();
  public readonly messageComponents = new Collection<string, MessageComponentInteractionType>();
  public readonly modalSubmissions = new Collection<string, ModalSubmitInteractionType>();

  public readonly logger: Logger = logger;
  public readonly prisma = new PrismaClient();

  constructor() {
    super({
      allowedMentions: { parse: ['users', 'roles'], repliedUser: false },
      intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences],
      partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.User, Partials.GuildMember, Partials.ThreadMember, Partials.GuildScheduledEvent]
    })
  };

  public override async login(token: string): Promise<string> {
    await loadHandlers(this);
    return await super.login(token);
  }
}