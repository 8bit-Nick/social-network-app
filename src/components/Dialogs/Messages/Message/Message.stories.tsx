import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Message } from './Message';

export default {
  title: 'Dialogs/Message Stories',
  component: Message,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Some Message',
  id: 1,
};

