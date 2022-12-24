import { Messages } from './../components/Dialogs/Messages/Messages';
export interface IDialogs {
  contactsData: { id: number; userName: string }[];
  messagesData: { id: number; message: string }[];
}

export interface IContact {
  userName: string;
  id: number;
}

export interface IMessage {
  message: string;
  id: number;
}
