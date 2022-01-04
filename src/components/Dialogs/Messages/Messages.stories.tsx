import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Messages} from './Messages';

export default {
  title: 'Dialogs/Messages Stories',
  component: Messages,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Messages>;

const Template: ComponentStory<typeof Messages> = (args) => <Messages {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  messagesData: [{ id:1, message: 'qweqwe' }]
};

