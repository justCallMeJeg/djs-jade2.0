import { type ClientEvents } from 'discord.js'
import type JadeClient from './JadeClient'

export default class DiscordClientEvent<Key extends keyof ClientEvents> {
  constructor (
    public eventName: Key,
    public listener: (client: JadeClient, ...args: ClientEvents[Key]) => any
  ) {};
};
