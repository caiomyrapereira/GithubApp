import React from 'react';
import UserInfo from './index';
import { action } from '@storybook/addon-actions';

console.log(action)
console.log(UserInfo)

export default {title:'UserInfo'};

export const UserInfo_component = () =>(
      <UserInfo  
         userinfo={
           {
         	  photo:'https://lh3.googleusercontent.com/proxy/201Dw2TUdCUwkxVZDS7AjN0LhLFeTr6FCr4vcXGfLpKjgq2KAJj82HUS8vCsYgSVTjm3_h1Xxawb9mKd9LGY6jfBKRWAXVnBGE_Z1LY7dJ-U',
         	  link:'www.github.com',
         	  userName:'User name',
         	  bio:'resumo do user',
         	  repos:0,
         	  followers:0,
         	  following:0
           }
         }

      />
);