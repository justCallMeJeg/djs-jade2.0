import { ApplicationCommandType } from 'discord.js'
import { ChatInputCommandInteraction } from '../../../classes/Interaction'

export default new ChatInputCommandInteraction({
  name: 'ping',
  type: ApplicationCommandType.ChatInput,
  description: 'Replies with pong!',
  category: 'Information',
  status: true,
  replyType: 'DeferReplyEphemeral',
  callbackHandler: async ({ interaction }) => {
    await interaction.deferReply({ephemeral: true})
    await interaction.followUp({ content: 'Pong!' })
  }
})
