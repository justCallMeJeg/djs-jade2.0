import { type ButtonInteractionType, type ChannelSelectMenuInteractionType, type ChatInputCommandInteractionType, type MentionableSelectMenuInteractionType, type MessageContextMenuCommandInteractionType, type ModalSubmitInteractionType, type RoleSelectMenuInteractionType, type StringSelectMenuInteractionType, type UserContextMenuCommandInteractionType, type UserSelectMenuInteractionType } from '../typings/interaction'

// ------------------------------------------------------------

// Chat Input Command Interaction Class
export class ChatInputCommandInteraction {
  constructor (options: ChatInputCommandInteractionType) {
    Object.assign(this, options)
  }
}

// User Context Menu Command Interaction Class
export class UserContextMenuCommandInteraction {
  constructor (options: UserContextMenuCommandInteractionType) {
    Object.assign(this, options)
  }
}

// Message Context Menu Command Interaction Class
export class MessageContextMenuCommandInteraction {
  constructor (options: MessageContextMenuCommandInteractionType) {
    Object.assign(this, options)
  }
}

// ------------------------------------------------------------

// Button Interaction Class
export class ButtonInteraction {
  constructor (options: ButtonInteractionType) {
    Object.assign(this, options)
  }
}

// String Select Menu Interaction Class
export class StringSelectMenuInteraction {
  constructor (options: StringSelectMenuInteractionType) {
    Object.assign(this, options)
  }
}

// User Select Menu Interaction Class
export class UserSelectMenuInteraction {
  constructor (options: UserSelectMenuInteractionType) {
    Object.assign(this, options)
  }
}

// Role Select Menu Interaction Class
export class RoleSelectMenuInteraction {
  constructor (options: RoleSelectMenuInteractionType) {
    Object.assign(this, options)
  }
}

// Mentionable Select Menu Interaction Class
export class MentionableSelectMenuInteraction {
  constructor (options: MentionableSelectMenuInteractionType) {
    Object.assign(this, options)
  }
}

// Channel Select Menu Interaction Class
export class ChannelSelectMenuInteraction {
  constructor (options: ChannelSelectMenuInteractionType) {
    Object.assign(this, options)
  }
}

// ------------------------------------------------------------

// Modal Submit Interaction Class
export class ModalSubmitInteraction {
  constructor (options: ModalSubmitInteractionType) {
    Object.assign(this, options)
  }
}

// ------------------------------------------------------------
