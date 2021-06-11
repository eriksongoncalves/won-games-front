import { Story, Meta } from '@storybook/react/types-6-0';

import Loading from '.';

export default {
  title: 'Loading',
  component: Loading
} as Meta;

export const Default: Story = () => <Loading />;
