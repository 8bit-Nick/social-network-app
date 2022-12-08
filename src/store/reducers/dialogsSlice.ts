import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDialogs } from '../../types/dialogs.interface';

const initialState: IDialogs = {
  contactsData: [
    { id: 1, userName: 'Tommy' },
    { id: 2, userName: 'John Wick' },
    { id: 3, userName: 'Izabella' },
    { id: 4, userName: 'Garold' },
    { id: 5, userName: 'Hillary' },
    { id: 6, userName: 'Antoine' },
    { id: 7, userName: 'Ludwig' },
    { id: 8, userName: 'Anna Lee' },
  ],
  messagesData: [
    { id: 1, message: 'Hello!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Lets go!' },
    { id: 4, message: 'Nice to meet you.' },
  ],
};

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    addNewMessage(state, action: PayloadAction<string>) {
      state.messagesData.push({ id: 5, message: action.payload });
    },
  },
});

export default dialogsSlice.reducer;

export const { addNewMessage } = dialogsSlice.actions;
