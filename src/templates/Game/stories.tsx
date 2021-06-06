import { Story, Meta } from '@storybook/react/types-6-0';
import Game from '.';

export default {
  title: 'Game',
  component: Game
} as Meta;

export const Default: Story = () => <Game />;
