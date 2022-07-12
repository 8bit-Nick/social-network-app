import React from 'react';
import {ComponentMeta} from '@storybook/react';
import Header from './Header';


export default {
  title: 'Header stories',
  component: Header,
} as ComponentMeta<typeof Header>;

export const newHeader = () => <Header/>;

