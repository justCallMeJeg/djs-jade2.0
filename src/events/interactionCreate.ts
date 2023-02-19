import DiscordClientEvent from '../classes/DiscordClientEvent'

export default new DiscordClientEvent('interactionCreate', async (client, interaction) => {
  const { applicationCommands } = client

  // ------------------------------------------------------------

  /**
   * Interaction Handler for Autocomplete Commands
   */
  if (interaction.isAutocomplete()) {
    // Interaction is an Autocomplete Command

    const subCmd = interaction.options.getSubcommand(false)
    const subCmdGroup = interaction.options.getSubcommandGroup(false)
    const interactionData = applicationCommands.get(interaction.commandName)

    if (interactionData === undefined) return

    if (subCmd !== null) {
      if (subCmdGroup !== null) {
        // Autocomplete: Subcommand Group
        client.logger.info('Interaction Detected | Autocomplete: Subcommand Group')
      }
      // Autocomplete: Subcommand
      client.logger.info('Interaction Detected | Autocomplete: Subcommand')
    }
    // Autocomplete: Command
    client.logger.info('Interaction Detected | Autocomplete: Command')
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

    if (interaction.isChatInputCommand()) {
      // Application Command: Chat Input (Slash Commands)
      const subCmd = interaction.options.getSubcommand(false)
      const subCmdGroup = interaction.options.getSubcommandGroup(false)
      const interactionData = applicationCommands.get(interaction.commandName)

      if (interactionData === undefined) return

      if (subCmd !== null) {
        if (subCmdGroup !== null) {
          // Chat Input: Subcommand Group
          client.logger.info('Interaction Detected | Chat Input: Subcommand Group')
        }
        // Chat Input: Subcommand
        client.logger.info('Interaction Detected | Chat Input: Subcommand')
      }
      // Chat Input: Command
      client.logger.info('Interaction Detected | Chat Input: Command')
    } else if (interaction.isContextMenuCommand()) {
      // Application Command: Context Menu

      if (interaction.isUserContextMenuCommand()) {
        // Context Menu: User
        client.logger.info('Interaction Detected | Context Menu: User')
      } else if (interaction.isMessageContextMenuCommand()) {
        // Context Menu: Message
        client.logger.info('Interaction Detected | Context Menu: Message')
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

    if (interaction.isButton()) {
      // Message Component: Button
      client.logger.info('Interaction Detected | Message Component: Button')
    } else if (interaction.isAnySelectMenu()) {
      // Message Component: Any Select Menu
      client.logger.info('Interaction Detected | Message Component: Any Select Menu')
    }
  }

  // ------------------------------------------------------------

  /**
   * Interaction Handler for Moda Submitions
   */
  if (interaction.isModalSubmit()) {
    // Interaction is a Modal Submition
    client.logger.info('Interaction Detected | Modal Submition')
  }

  // ------------------------------------------------------------
})
