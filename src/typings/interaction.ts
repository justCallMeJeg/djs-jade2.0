import { type AutocompleteInteraction, type ButtonComponentData, type ButtonInteraction, type ChannelSelectMenuComponentData, type ChannelSelectMenuInteraction, type ChatInputApplicationCommandData, type CommandInteraction, type CommandInteractionOptionResolver, type Guild, type GuildMember, type MentionableSelectMenuComponentData, type MentionableSelectMenuInteraction, type Message, type MessageApplicationCommandData, type MessageContextMenuCommandInteraction, type ModalComponentData, type ModalSubmitInteraction, type PermissionResolvable, type RoleSelectMenuComponentData, type RoleSelectMenuInteraction, type StringSelectMenuComponentData, type StringSelectMenuInteraction, type TextBasedChannel, type User, type UserApplicationCommandData, type UserContextMenuCommandInteraction, type UserSelectMenuComponentData, type UserSelectMenuInteraction } from 'discord.js'
import type JadeClient from '../classes/JadeClient'

// ------------------------------------------------------------

// Interaction Response Types
type InteractionResponse =
    | 'DeferReply'
    | 'DeferReplyEphemeral'
    | 'DeferredMessageUpdate'
    | 'UpdateMessage'
    | 'Modal'

// Command Category Types
type CommandCategoryTypes =
    | 'Information'
    | 'Moderation'
    | 'Games'
    | 'Utility'
    | 'Miscellaneous'

// Interaction Status Reason Types
type InteractionStatuses = 'Bug' | 'Maintenance'

// Interaction Status Interface
interface InteractionStatus {
  enabled: boolean
  reason?: InteractionStatuses
}

// ------------------------------------------------------------

// Extended Autocomplete Interaction
export interface ExtendedAutocompleteInteraction extends AutocompleteInteraction {
  channel: TextBasedChannel
  guild: Guild
  member: GuildMember
  user: User
};

// Extended Command Interaction
export interface ExtendedCommandInteraction extends CommandInteraction {
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
    | ExtendedCommandInteraction
    | ExtendedUserContextMenuCommandInteraction
    | ExtendedMessageContextMenuCommandInteraction
    | ExtendedButtonInteraction
    | ExtendedStringSelectMenuInteraction
    | ExtendedUserSelectMenuInteraction
    | ExtendedRoleSelectMenuInteraction
    | ExtendedMentionableSelectMenuInteraction
    | ExtendedChannelSelectMenuInteraction
    | ExtendedModalSubmitInteraction

// Repliable Extended Interactions
export type RepliableExtendedInteractions = Exclude<ExtendedInteractions, ExtendedAutocompleteInteraction>

// ------------------------------------------------------------

// Base Interaction Execute Options
interface BaseInteractionExecuteOptions {
  client: JadeClient
};

// Base Chat Input Command Interaction Execute Options
interface BaseChatInputCommandExecuteOptions extends BaseInteractionExecuteOptions {
  args: CommandInteractionOptionResolver
};

// Autocomeplete Interaction Execute Options
interface AutocompleteInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  interaction: ExtendedAutocompleteInteraction
};

// Chat Input Command Interaction Execute Options
interface ChatInputCommandInteractionExecuteOptions extends BaseChatInputCommandExecuteOptions {
  interaction: ExtendedCommandInteraction
};

// User Context Menu Command Interaction Execute Options
interface UserContextMenuCommandInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  interaction: ExtendedUserContextMenuCommandInteraction
};

// Message Context Menu Command Interaction Execute Options
interface MessageContextMenuCommandInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  interaction: ExtendedMessageContextMenuCommandInteraction
};

// Button Interaction Execute Options
interface ButtonInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  interaction: ExtendedButtonInteraction
};

// String Select Menu Interaction Execute Options
interface StringSelectMenuInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  interaction: ExtendedStringSelectMenuInteraction
};

// User Select Menu Interaction Execute Options
interface UserSelectMenuInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  interaction: ExtendedUserSelectMenuInteraction
};

// Role Select Menu Interaction Execute Options
interface RoleSelectMenuInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  interaction: ExtendedRoleSelectMenuInteraction
};

// Mentionable Select Menu Interaction Execute Options
interface MentionableSelectMenuInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  interaction: ExtendedMentionableSelectMenuInteraction
};

// Channel Select Menu Interaction Execute Options
interface ChannelSelectMenuInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  interaction: ExtendedChannelSelectMenuInteraction
};

// Modal Submit Interaction Execute Options
interface ModalSubmitInteractionExecuteOptions extends BaseInteractionExecuteOptions {
  interaction: ExtendedModalSubmitInteraction
};

// ------------------------------------------------------------

// Autocomplete Interaction Execute Function
type AutocompleteInteractionExecuteFunction = (options: AutocompleteInteractionExecuteOptions) => Promise<any>

// Chat Input Command Interaction Execute Function
type ChatInputCommandInteractionExecuteFunction = (options: ChatInputCommandInteractionExecuteOptions) => Promise<any>

// User Context Menu Command Interaction Execute Function
type UserContextMenuCommandInteractionExecuteFunction = (options: UserContextMenuCommandInteractionExecuteOptions) => Promise<any>

// Message Context Menu Command Interaction Execute Function
type MessageContextMenuCommandInteractionExecuteFunction = (options: MessageContextMenuCommandInteractionExecuteOptions) => Promise<any>

// Button Interaction Execute Function
type ButtonInteractionExecuteFunction = (options: ButtonInteractionExecuteOptions) => Promise<any>

// String Select Menu Interaction Execute Function
type StringSelectMenuInteractionExecuteFunction = (options: StringSelectMenuInteractionExecuteOptions) => Promise<any>

// User Select Menu Interaction Execute Function
type UserSelectMenuInteractionExecuteFunction = (options: UserSelectMenuInteractionExecuteOptions) => Promise<any>

// Role Select Menu Interaction Execute Function
type RoleSelectMenuInteractionExecuteFunction = (options: RoleSelectMenuInteractionExecuteOptions) => Promise<any>

// Mentionable Select Menu Interaction Execute Function
type MentionableSelectMenuInteractionExecuteFunction = (options: MentionableSelectMenuInteractionExecuteOptions) => Promise<any>

// Channel Select Menu Interaction Execute Function
type ChannelSelectMenuInteractionExecuteFunction = (options: ChannelSelectMenuInteractionExecuteOptions) => Promise<any>

// Modal Submit Interaction Execute Function
type ModalSubmitInteractionExecuteFunction = (options: ModalSubmitInteractionExecuteOptions) => Promise<any>

// ------------------------------------------------------------

// Base Interaction Type
interface BaseInteractionType {
  status: InteractionStatus | boolean
  userPermissions?: PermissionResolvable[]
  replyType?: InteractionResponse
}

// Extended Chat Input Application Command Data Type
type ExtendedChatInputApplicationCommandData = BaseInteractionType & {
  category: CommandCategoryTypes
} & ChatInputApplicationCommandData

// Chat Input Command Interaction Type
export type ChatInputCommandInteractionType = {
  autocompleteHandler?: AutocompleteInteractionExecuteFunction
  callbackHandler: ChatInputCommandInteractionExecuteFunction
} & ExtendedChatInputApplicationCommandData

// User Context Menu Command Interaction Type
export type UserContextMenuCommandInteractionType = {
  callbackHandler: UserContextMenuCommandInteractionExecuteFunction
} & BaseInteractionType & UserApplicationCommandData

// Message Context Menu Command Interaction Type
export type MessageContextMenuCommandInteractionType = {
  callbackHandler: MessageContextMenuCommandInteractionExecuteFunction
} & BaseInteractionType & MessageApplicationCommandData

// Context Menu Command Interaction Type
export type ContextMenuCommandInteractionTypes =
    | UserContextMenuCommandInteractionType
    | MessageContextMenuCommandInteractionType

// Application Command Interaction Types
export type ApplicationCommandInteractionType =
    | ChatInputCommandInteractionType
    | ContextMenuCommandInteractionTypes

// Button Interaction Type
export type ButtonInteractionType = BaseInteractionType & {
  callbackHandler: ButtonInteractionExecuteFunction
} & ButtonComponentData

// String Select Menu Interaction Type
export type StringSelectMenuInteractionType = BaseInteractionType & {
  callbackHandler: StringSelectMenuInteractionExecuteFunction
} & StringSelectMenuComponentData

// User Select Menu Interaction Type
export type UserSelectMenuInteractionType = BaseInteractionType & {
  callbackHandler: UserSelectMenuInteractionExecuteFunction
} & UserSelectMenuComponentData

// Role Select Menu Interaction Type
export type RoleSelectMenuInteractionType = BaseInteractionType & {
  callbackHandler: RoleSelectMenuInteractionExecuteFunction
} & RoleSelectMenuComponentData

// Mentionable Select Menu Interaction Type
export type MentionableSelectMenuInteractionType = BaseInteractionType & {
  callbackHandler: MentionableSelectMenuInteractionExecuteFunction
} & MentionableSelectMenuComponentData

// Channel Select Menu Interaction Type
export type ChannelSelectMenuInteractionType = BaseInteractionType & {
  callbackHandler: ChannelSelectMenuInteractionExecuteFunction
} & ChannelSelectMenuComponentData

// Select Menu Interaction Type
export type SelectMenuInteractionTypes =
  | StringSelectMenuInteractionType
  | UserSelectMenuInteractionType
  | RoleSelectMenuInteractionType
  | MentionableSelectMenuInteractionType
  | ChannelSelectMenuInteractionType

// Message Component Interaction Types
export type MessageComponentInteractionType =
  | ButtonInteractionType
  | SelectMenuInteractionTypes

// Modal Submit Interaction Type
export type ModalSubmitInteractionType = BaseInteractionType & {
  callbackHandler: ModalSubmitInteractionExecuteFunction
} & ModalComponentData
