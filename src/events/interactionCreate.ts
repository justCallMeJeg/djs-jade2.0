import { type CommandInteractionOptionResolver } from 'discord.js'
import DiscordClientEvent from '../classes/DiscordClientEvent'
import { type ExtendedMessageContextMenuCommandInteraction, type MessageContextMenuCommandInteractionType, type ExtendedChatInputCommandInteraction, type UserContextMenuCommandInteractionType, type ExtendedUserContextMenuCommandInteraction, type ButtonInteractionType, type ExtendedButtonInteraction, type StringSelectMenuInteractionType, type ExtendedStringSelectMenuInteraction, type UserSelectMenuInteractionType, type ExtendedUserSelectMenuInteraction, type RoleSelectMenuInteractionType, type ExtendedRoleSelectMenuInteraction, type MentionableSelectMenuInteractionType, type ExtendedMentionableSelectMenuInteraction, type ChannelSelectMenuInteractionType, type ExtendedChannelSelectMenuInteraction, type ExtendedModalSubmitInteraction, type ExtendedAutocompleteInteraction, type AnySelectMenuInteractionType, type AutocompleteInteractionType, type SlashCommandInteractionType } from '../typings/interaction'

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

    const chatInputData = interactionData as AutocompleteInteractionType

    const subCmd = options.getSubcommand(false)
    const subCmdGroup = options.getSubcommandGroup(false)
    const isSubCmdGroup = subCmdGroup !== null
    const isSubCmd = subCmd !== null

    if (isSubCmd) {
      if (isSubCmdGroup){
        // Chat Input: Subcommand Group
        const subCmdData = chatInputData.optionHandler?.find((data) => {
          return data.name === `${subCmdGroup} ${subCmd}`
        })
        if (subCmdData === undefined) return;
        return await subCmdData.autocompleteHandler({
          client, interaction: interaction as ExtendedAutocompleteInteraction
        })
      }
      // Chat Input: Subcommand
      const subCmdData = chatInputData.optionHandler?.find((data) => {
        return data.name === subCmd
      })
      if (subCmdData === undefined) return;
      return await subCmdData.autocompleteHandler({
        client, interaction: interaction as ExtendedAutocompleteInteraction
      })
    }
    // Chat Input: Command
    return await chatInputData.autocompleteHandler({
      client, interaction: interaction as ExtendedAutocompleteInteraction
    })
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
  
      const chatInputData = interactionData as SlashCommandInteractionType
  
      const subCmd = options.getSubcommand(false)
      const subCmdGroup = options.getSubcommandGroup(false)
      const isSubCmdGroup = subCmdGroup !== null
      const isSubCmd = subCmd !== null
  
      if (isSubCmd) {
        if (isSubCmdGroup) {
          // Chat Input: Subcommand Group
          const subCmdData = chatInputData.optionHandler?.find((data) => {
            return data.name === `${subCmdGroup} ${subCmd}`
          })
          if (subCmdData === undefined) return;
          return await subCmdData.callbackHandler({
            client, interaction: interaction as ExtendedChatInputCommandInteraction,
            args: interaction.options as CommandInteractionOptionResolver
          })
        }
        // Chat Input: Subcommand
        const subCmdData = chatInputData.optionHandler?.find((data) => {
          return data.name === subCmd
        })
        if (subCmdData === undefined) return;
        return await subCmdData.callbackHandler({
          client, interaction: interaction as ExtendedChatInputCommandInteraction,
          args: interaction.options as CommandInteractionOptionResolver
        })
      }
      // Chat Input: Command
      return await chatInputData.callbackHandler({
        client, interaction: interaction as ExtendedChatInputCommandInteraction,
        args: interaction.options as CommandInteractionOptionResolver
      })
    } else if (interaction.isContextMenuCommand()) {
      // Application Command: Context Menu
      if (interaction.isUserContextMenuCommand()) {
        // Context Menu: User
        const contextMenuData = interactionData as UserContextMenuCommandInteractionType
        await contextMenuData.callbackHandler({
          client, interaction: interaction as ExtendedUserContextMenuCommandInteraction
        })
      } else if (interaction.isMessageContextMenuCommand()) {
        // Context Menu: Message
        const contextMenuData = interactionData as MessageContextMenuCommandInteractionType
        await contextMenuData.callbackHandler({
          client, interaction: interaction as ExtendedMessageContextMenuCommandInteraction
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
