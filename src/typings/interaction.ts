import { type ChatInputCommandInteraction, type AutocompleteInteraction, type ButtonInteraction, type ChannelSelectMenuComponentData, type ChannelSelectMenuInteraction, type ChatInputApplicationCommandData, type CommandInteractionOptionResolver, type Guild, type GuildMember, type MentionableSelectMenuComponentData, type MentionableSelectMenuInteraction, type Message, type MessageApplicationCommandData, type MessageContextMenuCommandInteraction, type ModalComponentData, type ModalSubmitInteraction, type PermissionResolvable, type RoleSelectMenuComponentData, type RoleSelectMenuInteraction, type StringSelectMenuComponentData, type StringSelectMenuInteraction, type TextBasedChannel, type User, type UserApplicationCommandData, type UserContextMenuCommandInteraction, type UserSelectMenuComponentData, type UserSelectMenuInteraction, type ApplicationCommandType, type InteractionButtonComponentData } from 'discord.js'
import type JadeClient from '../classes/JadeClient'

// ------------------------------------------------------------

// Interaction Response Types
export type InteractionResponse =
    | 'DeferReply'
    | 'DeferReplyEphemeral'
    | 'DeferredMessageUpdate'
    | 'UpdateMessage'
    | 'Modal'

// Command Category Types
export type CommandCategoryTypes =
    | 'Information'
    | 'Moderation'
    | 'Games'
    | 'Utility'
    | 'Miscellaneous'

// Interaction Status Reason Types
export type InteractionStatusReasonTypes = 'Bug' | 'Maintenance'

// Interaction Status Interface
export interface InteractionStatus {
  enabled: boolean
  reason?: InteractionStatusReasonTypes
}

// ------------------------------------------------------------

// Extended Autocomplete Interaction
export interface ExtendedAutocompleteInteraction extends AutocompleteInteraction {
  channel: TextBasedChannel
  guild: Guild
  member: GuildMember
  user: User
};

// Extended Chat Input Command Interaction
export interface ExtendedChatInputCommandInteraction extends ChatInputCommandInteraction {
  channel: TextBasedChannel
  guild: Guild
  member: GuildMember
  user: User
};

// Extended User Context Menu Interaction
export interface ExtendedUserContextMenuCommandInteraction extends UserContextMenuCommandInteraction {
  channel: TextBasedChannel
  guild: Guild
  member: GuildMember
  message: Message
  targetMember: GuildMember
  targetUser: User
  user: User
};

// Extended Message Context Menu Interaction
export interface ExtendedMessageContextMenuCommandInteraction extends MessageContextMenuCommandInteraction {
  channel: TextBasedChannel
  guild: Guild
  member: GuildMember
  message: Message
  targetMessage: Message
  user: User
};

// Extended Button Interaction
export interface ExtendedButtonInteraction extends ButtonInteraction {
  channel: TextBasedChannel
  guild: Guild
  member: GuildMember
  message: Message
  user: User
};

// Extended String Select Menu Interaction
export interface ExtendedStringSelectMenuInteraction extends StringSelectMenuInteraction {
  channel: TextBasedChannel
  guild: Guild
  member: GuildMember
  message: Message
  user: User
};

// Extended User Select Menu Interaction
export interface ExtendedUserSelectMenuInteraction extends UserSelectMenuInteraction {
  channel: TextBasedChannel
  guild: Guild
  member: GuildMember
  message: Message
  user: User
};

// Extended Role Select Menu Interaction
export interface ExtendedRoleSelectMenuInteraction extends RoleSelectMenuInteraction {
  channel: TextBasedChannel
  guild: Guild
  member: GuildMember
  message: Message
  user: User
}

// Extended Mentionable Select Menu Interaction
export interface ExtendedMentionableSelectMenuInteraction extends MentionableSelectMenuInteraction {
  channel: TextBasedChannel
  guild: Guild
  member: GuildMember
  message: Message
  user: User
}

// Extended Channel Select Menu Interaction
export interface ExtendedChannelSelectMenuInteraction extends ChannelSelectMenuInteraction {
  channel: TextBasedChannel
  guild: Guild
  member: GuildMember
  message: Message
  user: User
}

// Extended Modal Interaction
export interface ExtendedModalSubmitInteraction extends ModalSubmitInteraction {
  channel: TextBasedChannel
  guild: Guild
  member: GuildMember
  message: Message
  user: User
};

// Extended Interactions
export type ExtendedInteractions =
  | ExtendedAutocompleteInteraction
  | ExtendedChatInputCommandInteraction
  | ExtendedUserContextMenuCommandInteraction
  | ExtendedMessageContextMenuCommandInteraction
  | ExtendedButtonInteraction
  | ExtendedStringSelectMenuInteraction
  | ExtendedUserSelectMenuInteraction
  | ExtendedRoleSelectMenuInteraction
  | ExtendedMentionableSelectMenuInteraction
  | ExtendedChannelSelectMenuInteraction
  | ExtendedModalSubmitInteraction

// Extended Select Menu Interactions
export type ExtendedSelectMenuInteractions =
  | ExtendedStringSelectMenuInteraction
  | ExtendedUserSelectMenuInteraction
  | ExtendedRoleSelectMenuInteraction
  | ExtendedMentionableSelectMenuInteraction
  | ExtendedChannelSelectMenuInteraction

// Repliable Extended Interactions
export type RepliableExtendedInteractions = Exclude<ExtendedInteractions, ExtendedAutocompleteInteraction>

// ------------------------------------------------------------

// Base Interaction Execute Options
interface BaseInteractionExecuteOptions {
  // The Discord client instance
  client: JadeClient
};

// Autocomplete Interaction Execute Options
interface AutocompleteInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  // The interaction that triggered this command
  interaction: ExtendedAutocompleteInteraction
};

// Chat Input Command Interaction Execute Options
interface ChatInputCommandInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  // The interaction that triggered this command
  interaction: ExtendedChatInputCommandInteraction
  // The resolved arguments for this command
  args: CommandInteractionOptionResolver
};

// User Context Menu Command Interaction Execute Options
interface UserContextMenuCommandInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  // The interaction that triggered this command
  interaction: ExtendedUserContextMenuCommandInteraction
};

// Message Context Menu Command Interaction Execute Options
interface MessageContextMenuCommandInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  // The interaction that triggered this command
  interaction: ExtendedMessageContextMenuCommandInteraction
};

// Button Interaction Execute Options
interface ButtonInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  // The interaction that triggered this command
  interaction: ExtendedButtonInteraction
};

// String Select Menu Interaction Execute Options
interface StringSelectMenuInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  // The interaction that triggered this command
  interaction: ExtendedStringSelectMenuInteraction
};

// User Select Menu Interaction Execute Options
interface UserSelectMenuInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  // The interaction that triggered this command
  interaction: ExtendedUserSelectMenuInteraction
};

// Role Select Menu Interaction Execute Options
interface RoleSelectMenuInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  // The interaction that triggered this command
  interaction: ExtendedRoleSelectMenuInteraction
};

// Mentionable Select Menu Interaction Execute Options
interface MentionableSelectMenuInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  // The interaction that triggered this command
  interaction: ExtendedMentionableSelectMenuInteraction
};

// Channel Select Menu Interaction Execute Options
interface ChannelSelectMenuInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  // The interaction that triggered this command
  interaction: ExtendedChannelSelectMenuInteraction
};

// Modal Submit Interaction Execute Options
interface ModalSubmitInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  // The interaction that triggered this command
  interaction: ExtendedModalSubmitInteraction
};

// ------------------------------------------------------------

// Autocomplete Interaction Execute Function
// Function signature for handling autocomplete interactions
type AutocompleteInteractionExecuteFunction = (options: AutocompleteInteractionExecuteOptions) => Promise<any>

// Chat Input Command Interaction Execute Function
// Function signature for handling chat input command interactions
type ChatInputCommandInteractionExecuteFunction = (options: ChatInputCommandInteractionExecuteOptions) => Promise<any>

// User Context Menu Command Interaction Execute Function
// Function signature for handling user context menu command interactions
type UserContextMenuCommandInteractionExecuteFunction = (options: UserContextMenuCommandInteractionExecuteOptions) => Promise<any>

// Message Context Menu Command Interaction Execute Function
// Function signature for handling message context menu command interactions
type MessageContextMenuCommandInteractionExecuteFunction = (options: MessageContextMenuCommandInteractionExecuteOptions) => Promise<any>

// Button Interaction Execute Function
// Function signature for handling button interactions
type ButtonInteractionExecuteFunction = (options: ButtonInteractionExecuteOptions) => Promise<any>

// String Select Menu Interaction Execute Function
// Function signature for handling string select menu interactions
type StringSelectMenuInteractionExecuteFunction = (options: StringSelectMenuInteractionExecuteOptions) => Promise<any>

// User Select Menu Interaction Execute Function
// Function signature for handling user select menu interactions
type UserSelectMenuInteractionExecuteFunction = (options: UserSelectMenuInteractionExecuteOptions) => Promise<any>

// Role Select Menu Interaction Execute Function
// Function signature for handling role select menu interactions
type RoleSelectMenuInteractionExecuteFunction = (options: RoleSelectMenuInteractionExecuteOptions) => Promise<any>

// Mentionable Select Menu Interaction Execute Function
// Function signature for handling mentionable select menu interactions
type MentionableSelectMenuInteractionExecuteFunction = (options: MentionableSelectMenuInteractionExecuteOptions) => Promise<any>

// Channel Select Menu Interaction Execute Function
// Function signature for handling channel select menu interactions
type ChannelSelectMenuInteractionExecuteFunction = (options: ChannelSelectMenuInteractionExecuteOptions) => Promise<any>

// Modal Submit Interaction Execute Function
// Function signature for handling modal submit interactions
type ModalSubmitInteractionExecuteFunction = (options: ModalSubmitInteractionExecuteOptions) => Promise<any>

// ------------------------------------------------------------

// Base Interaction Type
interface BaseInteractionType {
  status: InteractionStatus | boolean
  userPermissions?: PermissionResolvable[]
  replyType?: InteractionResponse
}

// Chat Input Command Interaction Type
export interface ChatInputCommandInteractionType extends BaseInteractionType, ChatInputApplicationCommandData {
  type: ApplicationCommandType.ChatInput
  category: CommandCategoryTypes
  autocompleteHandler?: AutocompleteInteractionExecuteFunction
  callbackHandler: ChatInputCommandInteractionExecuteFunction
}

// User Context Menu Command Interaction Type
export interface UserContextMenuCommandInteractionType extends BaseInteractionType, UserApplicationCommandData {
  type: ApplicationCommandType.User
  callbackHandler: UserContextMenuCommandInteractionExecuteFunction
}

// Message Context Menu Command Interaction Type
export interface MessageContextMenuCommandInteractionType extends BaseInteractionType, MessageApplicationCommandData {
  type: ApplicationCommandType.Message
  callbackHandler: MessageContextMenuCommandInteractionExecuteFunction
}

// Application Command Interaction Types
export type CommandInteractionType =
  | ChatInputCommandInteractionType
  | UserContextMenuCommandInteractionType
  | MessageContextMenuCommandInteractionType

// Button Interaction Type
export type ButtonInteractionType = BaseInteractionType & {
  callbackHandler: ButtonInteractionExecuteFunction
} & InteractionButtonComponentData

// String Select Menu Interaction Type
export interface StringSelectMenuInteractionType extends BaseInteractionType, StringSelectMenuComponentData {
  callbackHandler: StringSelectMenuInteractionExecuteFunction
}

// User Select Menu Interaction Type
export interface UserSelectMenuInteractionType extends BaseInteractionType, UserSelectMenuComponentData {
  callbackHandler: UserSelectMenuInteractionExecuteFunction
}

// Role Select Menu Interaction Type
export interface RoleSelectMenuInteractionType extends BaseInteractionType, RoleSelectMenuComponentData {
  callbackHandler: RoleSelectMenuInteractionExecuteFunction
}

// Mentionable Select Menu Interaction Type
export interface MentionableSelectMenuInteractionType extends BaseInteractionType, MentionableSelectMenuComponentData {
  callbackHandler: MentionableSelectMenuInteractionExecuteFunction
}

// Channel Select Menu Interaction Type
export interface ChannelSelectMenuInteractionType extends BaseInteractionType, ChannelSelectMenuComponentData {
  callbackHandler: ChannelSelectMenuInteractionExecuteFunction
}

// Select Menu Interaction Types
export type AnySelectMenuInteractionType =
  | StringSelectMenuInteractionType
  | UserSelectMenuInteractionType
  | RoleSelectMenuInteractionType
  | MentionableSelectMenuInteractionType
  | ChannelSelectMenuInteractionType

// Message Component Interaction Types
export type MessageComponentInteractionType =
  | ButtonInteractionType
  | AnySelectMenuInteractionType

// Modal Submit Interaction Type
export interface ModalSubmitInteractionType extends BaseInteractionType, ModalComponentData {
  callbackHandler: ModalSubmitInteractionExecuteFunction
}

// ------------------------------------------------------------
