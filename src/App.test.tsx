import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {state} from "./redux/state";

test('renders learn react link', () => {
  render(<App contactsData={state.contactsData}
              messagesData={state.messagesData}
              postsData={state.postsData}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
