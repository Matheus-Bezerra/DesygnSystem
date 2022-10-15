import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'lorem ipsum',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'inline-radio',
    },
  },
} as Meta<TextProps>;

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  },
};

export const Default: StoryObj<TextProps> = {};

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>testando outra tag</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
