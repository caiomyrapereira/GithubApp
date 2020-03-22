import React from 'react';
import Search from './index';
import { action } from '@storybook/addon-actions';


export default  { title:'Search' };


export const Search_component  = ()=>(

	  <Search handleSearch={action('get user')} />
       
);