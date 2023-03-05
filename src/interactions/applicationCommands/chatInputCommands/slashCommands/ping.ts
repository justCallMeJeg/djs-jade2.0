import { ApplicationCommandOptionType, ApplicationCommandType } from 'discord.js'
import { SlashCommandInteraction } from '../../../../classes/Interaction'

export default new SlashCommandInteraction({
  name: 'ping',
  type: ApplicationCommandType.ChatInput,
  description: 'Replies with pong!',
  category: 'Information',
  status: true,
  replyType: 'DeferReplyEphemeral',
  options: [
    {
      name: `one`,
      description: `First SubCommand Group`,
      type: ApplicationCommandOptionType.SubcommandGroup,
      options: [
        {
          name: `two`,
          description: `Subcommand Group`,
          type: ApplicationCommandOptionType.Subcommand
        }
      ]
    },
    {
      name: `subcommand`,
      description: `Subcommand`,
      type: ApplicationCommandOptionType.Subcommand
    }
  ],
  optionHandler: [
    {
      name: `one two`,
      callbackHandler: async({interaction}) => {
        await interaction.deferReply({ ephemeral: true })
        await interaction.followUp({ content: 'SUBCOMMAND GROUP!' })
      }
    },
    {
      name: `subcommand`,
      callbackHandler: async({interaction}) => {
        await interaction.deferReply({ ephemeral: true })
        await interaction.followUp({ content: 'SUBCOMMAND!' })
      }
    }
  ],
  callbackHandler: async ({ interaction }) => {
    await interaction.deferReply({ ephemeral: true })
    await interaction.followUp({ content: 'COMMAND!' })
  }
})
