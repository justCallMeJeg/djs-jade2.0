import { ChatInputCommandInteraction } from '../../classes/Interaction'

export default new ChatInputCommandInteraction({
  name: 'ping',
  description: 'Replies with pong!',
  category: 'Information',
  status: true,
  replyType: 'DeferReplyEphemeral',
  callbackHandler: async ({ interaction }) => {
    await interaction.followUp({ content: 'Pong!' })
  }
})
