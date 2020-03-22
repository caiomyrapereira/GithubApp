import React from 'react';
import Actions from './index';
import { action } from '@storybook/addon-actions';

export default { title: 'Actions' };

export const Actions_component = () =>( 
  <Actions
    handleRepos ={ action('get Repository') }
    handleStarred = { action('get  Starred') }
   />
);


