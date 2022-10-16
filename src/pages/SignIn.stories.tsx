import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { SignIn } from './SignIn';

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  args: {
    children: 'Create account',
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText('Digite seu e-mail'),
      'matheusbwzerra002@gmail.com',
    );
    userEvent.type(canvas.getByPlaceholderText('*******'), '12345');
    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado!')).toBeInTheDocument();
    });
  },
};
