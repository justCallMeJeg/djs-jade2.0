import { ActivityType } from 'discord.js'
import DiscordClientEvent from '../classes/DiscordClientEvent'
import type JadeClient from '../classes/JadeClient'
import { type CommandInteractionType } from '../typings/interaction'

export default new DiscordClientEvent('ready', async (client: JadeClient) => {
  console.clear() // Clearing Logs

  // Bot Information
  client.logger.info(`Bot deployed. Authorized as ${client.user?.tag ?? 'unknown'}`)
  client.logger.info(`Watching '${client.guilds.cache.size}' Servers | Listening to '${client.users.cache.size}' Users | RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
  client.logger.info(`Deployment Time: ${new Date().toLocaleTimeString('en', { timeZone: 'Asia/Shanghai' })}`)

  // Bot Presence
  client.user?.setPresence({ activities: [{ name: '/help', type: ActivityType.Playing }], status: 'idle' })

  // Registering Application Commands
  const applicationCommands: CommandInteractionType[] = []
  client.applicationCommands.each(command => applicationCommands.push(command))
  await client.application?.commands.set(applicationCommands)

  // Anti-Crash
  process.on('unhandledRejection', (reason: unknown, p: Promise<unknown>) => {
    client.logger.fatal(reason, '[ANTI-CRASH] :: Unhandled Rejection/Catch ::', p)
  })
  process.on('uncaughtException', (err: Error, origin: NodeJS.UncaughtExceptionOrigin) => {
    client.logger.fatal(new Error(err.message, { cause: origin }))
  })
  process.on('uncaughtExceptionMonitor', (err: Error, origin: NodeJS.UncaughtExceptionOrigin) => {
    client.logger.fatal(new Error(err.message, { cause: origin }))
  })
})
