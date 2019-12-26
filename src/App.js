'use strict';

import React from 'react';
import Appcontainer from './Components/appContainer';
class App extends React.Component{
 
 constructor(){
  super();
  this.state = {
    userinfo:{
       userName:'caio myra',
       img:'https://avatars1.githubusercontent.com/u/29695906?v=4',
       link:'https://github.com/caiomyrapereira',
       repos:21,
       followers:5,
       following:9
    },
    repos:[{
      name:'Repos',
      link:'#'
    }],
    starred:[{
      name:'Repos',
      link:'#'
    }]
  };
 }
 
 render(){ 
  return <Appcontainer
             userinfo = {this.state.userinfo}  
              repos = {this.state.repos}
              starred = {this.state.starred}
          />
 }
}

export default App;
