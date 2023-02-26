import { ApplicationCommandType } from 'discord.js'
import { MessageContextMenuCommandInteraction } from '../../../../classes/Interaction'

export default new MessageContextMenuCommandInteraction({
  name: 'Get Content',
  type: ApplicationCommandType.Message,
  status: {
    enabled: true
  },
  callbackHandler: async ({ interaction }) => {
    await interaction.deferReply({ ephemeral: true })
    await interaction.followUp({ content: `${interaction.targetMessage.content}` })
  }
})
