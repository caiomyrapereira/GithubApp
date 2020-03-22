import React from 'react';
import { Button } from '@storybook/react/demo';

export default { title: 'ok' };

export const withText = () => <div>212 Button</div>;

export const newButton =()=><Button> new button </Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯  212
    </span>
  </Button>
);