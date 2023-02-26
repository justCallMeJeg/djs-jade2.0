import { type CommandInteractionOptionResolver } from 'discord.js'
import DiscordClientEvent from '../classes/DiscordClientEvent'
import { type ExtendedMessageContextMenuCommandInteraction, type MessageContextMenuCommandInteractionType, type ChatInputCommandInteractionType, type ExtendedChatInputCommandInteraction, type UserContextMenuCommandInteractionType, type ExtendedUserContextMenuCommandInteraction, type ButtonInteractionType, type ExtendedButtonInteraction, type StringSelectMenuInteractionType, type ExtendedStringSelectMenuInteraction, type UserSelectMenuInteractionType, type ExtendedUserSelectMenuInteraction, type RoleSelectMenuInteractionType, type ExtendedRoleSelectMenuInteraction, type MentionableSelectMenuInteractionType, type ExtendedMentionableSelectMenuInteraction, type ChannelSelectMenuInteractionType, type ExtendedChannelSelectMenuInteraction, type ExtendedModalSubmitInteraction, type ExtendedAutocompleteInteraction, type AnySelectMenuInteractionType } from '../typings/interaction'

export default new DiscordClientEvent('interactionCreate', async (client, interaction) => {
  const { applicationCommands, messageComponents, modalSubmissions } = client

  // ------------------------------------------------------------

  /**
   * Interaction Handler for Autocomplete Commands
   *
   * Command; SubCommand; SubCommandGroup
   */
  if (interaction.isAutocomplete()) {
    const { options, commandName } = interaction
    const interactionData = applicationCommands.get(commandName)
    if (interactionData === undefined) return

    const chatInputData = interactionData as ChatInputCommandInteractionType
    if (chatInputData.autocompleteHandler === undefined) return

    const subCmd = options.getSubcommand(false)
    const subCmdGroup = options.getSubcommandGroup(false)
    const isSubcommandGroup = subCmdGroup !== null
    const isSubcommand = subCmd !== null

    if (isSubcommandGroup) {
      // Autocomplete: Subcommand Group
      client.logger.info('Interaction Detected | Autocomplete: Subcommand Group')
    } else if (isSubcommand) {
      // Autocomplete: Subcommand
      client.logger.info('Interaction Detected | Autocomplete: Subcommand')
    } else {
      // Autocomplete: Command
      await chatInputData.autocompleteHandler({ client, interaction: interaction as ExtendedAutocompleteInteraction })
    }
  }

  // ------------------------------------------------------------

  /**
   * Interaction Handler for Application Commands
   *
   * Chat Input Command:
   *    Command; SubCommand; SubCommandGroup
   * Context Menu Command:
   *    User; Message
  */
  if (interaction.isCommand()) {
    // Interaction is an Application Command
    const interactionData = applicationCommands.get(interaction.commandName)
    if (interactionData === undefined) return

    if (interaction.isChatInputCommand()) {
      // Application Command: Chat Input (Slash Commands)
      const { options } = interaction

      const chatInputData = interactionData as ChatInputCommandInteractionType

      const subCmd = options.getSubcommand(false)
      const subCmdGroup = options.getSubcommandGroup(false)
      const isSubcommandGroup = subCmdGroup !== null
      const isSubcommand = subCmd !== null

      if (isSubcommand) {
        if (isSubcommandGroup) {
          // Chat Input: Subcommand Group
          client.logger.info('Interaction Detected | Chat Input: Subcommand Group')
        }
        // Chat Input: Subcommand
        client.logger.info('Interaction Detected | Chat Input: Subcommand')
      }
      // Chat Input: Command
      await chatInputData.callbackHandler({
        client,
        interaction: interaction as ExtendedChatInputCommandInteraction,
        args: interaction.options as CommandInteractionOptionResolver
      })
    } else if (interaction.isContextMenuCommand()) {
      // Application Command: Context Menu
      if (interaction.isUserContextMenuCommand()) {
        // Context Menu: User
        const contextMenuData = interactionData as UserContextMenuCommandInteractionType
        await contextMenuData.callbackHandler({
          client,
          interaction: interaction as ExtendedUserContextMenuCommandInteraction
        })
      } else if (interaction.isMessageContextMenuCommand()) {
        // Context Menu: Message
        const contextMenuData = interactionData as MessageContextMenuCommandInteractionType
        await contextMenuData.callbackHandler({
          client,
          interaction: interaction as ExtendedMessageContextMenuCommandInteraction
        })
      }
    }
  }

  // ------------------------------------------------------------

  /**
   * Interaction Handler for Message Components
   *
   * Button; Select Menu
   */
  if (interaction.isMessageComponent()) {
    // Interaction is a Message Component
    const interactionData = messageComponents.get(interaction.customId)
    if (interactionData === undefined) return

    if (interaction.isButton()) {
      // Message Component: Button
      const buttonData = interactionData as ButtonInteractionType
      await buttonData.callbackHandler({
        client, interaction: interaction as ExtendedButtonInteraction
      })
    } else if (interaction.isAnySelectMenu()) {
      // Message Component: Select Menu
      const selectMenuData = interactionData as AnySelectMenuInteractionType

      if (interaction.isStringSelectMenu()) {
        await (selectMenuData as StringSelectMenuInteractionType)
          .callbackHandler({ client, interaction: interaction as ExtendedStringSelectMenuInteraction })
      } else if (interaction.isUserSelectMenu()) {
        await (selectMenuData as UserSelectMenuInteractionType)
          .callbackHandler({ client, interaction: interaction as ExtendedUserSelectMenuInteraction })
      } else if (interaction.isRoleSelectMenu()) {
        await (selectMenuData as RoleSelectMenuInteractionType)
          .callbackHandler({ client, interaction: interaction as ExtendedRoleSelectMenuInteraction })
      } else if (interaction.isMentionableSelectMenu()) {
        await (selectMenuData as MentionableSelectMenuInteractionType)
          .callbackHandler({ client, interaction: interaction as ExtendedMentionableSelectMenuInteraction })
      } else if (interaction.isChannelSelectMenu()) {
        await (selectMenuData as ChannelSelectMenuInteractionType)
          .callbackHandler({ client, interaction: interaction as ExtendedChannelSelectMenuInteraction })
      }
    }
  }

  // ------------------------------------------------------------

  /**
   * Interaction Handler for Moda Submitions
   */
  if (interaction.isModalSubmit()) {
    // Interaction is a Modal Submition

    const interactionData = modalSubmissions.get(interaction.customId)
    if (interactionData === undefined) return
    await interactionData.callbackHandler({
      client, interaction: interaction as ExtendedModalSubmitInteraction
    })
  }

  // ------------------------------------------------------------
})
