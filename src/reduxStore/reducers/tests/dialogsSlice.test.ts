import { IDialogs } from '../../../types/dialogs.interface';
import dialogsSlice, { addNewMessage } from '../dialogsSlice';

let state: IDialogs;
beforeEach(() => {
  state = {
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
});

describe('addNewMessage testing', () => {
  test('After adding a new message, the length of the array should be 5', () => {
    const newState = dialogsSlice(
      state,
      addNewMessage('the first test message')
    );
    expect(newState.messagesData.length).toBe(5);
  });

  test('The new message should be "second test message"', () => {
    const newState = dialogsSlice(
      state,
      addNewMessage('the second test message')
    );
    expect(newState.messagesData[4].message).toBe('the second test message');
  });
});
