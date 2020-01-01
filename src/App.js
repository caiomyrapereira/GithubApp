'use strict';

import React from 'react';
import ajax  from '@fdaciuk/ajax';
import Appcontainer from './Components/appContainer';

class App extends React.Component{
 
 constructor(){
  super();
  this.state = {
    userinfo:null,
    repos:[],
    starred:[],
    isFetching:false
  };
 }
 
 handleSearch(e){
  const value = document.querySelector('[data-js="search"]').value; 
  this.setState({isFetching:true});
  ajax().get(`https://api.github.com/users/${value}`)
  .then((respose)=>{
    this.setState({
      userinfo: {
        userName:respose.name,
        bio:respose.bio,
        photo:respose.avatar_url,
        link:`https://github.com/${respose.login}`,
        linkStarred:`https://api.github.com/users/${respose.login}/starred`,
        linkRepos:respose.repos_url,
        repos:respose.public_repos,
        followers:respose.followers,
        following:respose.following
      },
      repos:[],
      starred:[]     
    })
  }).always(()=>this.setState({isFetching:false}));
 }

 handleRepos(e){
    if(!!this.state.repos.length)
      return ;

    const url = this.state.userinfo.linkRepos;
    ajax()
    .get(url)
    .then((respose) =>{
      this.setState({ 
        repos:respose.map( (elem , index) =>{
          return {   
            id:elem.id,
            name:elem.name,
            link:elem.html_url
          };
        })
      })  
    })
 }

 handleStarred(e){
    if(!!this.state.starred.length)
      return ;

    const url = this.state.userinfo.linkStarred;
    ajax()
    .get(url)
    .then((respose) => {
      this.setState({ 
        starred:respose.map( (elem , index) =>{
          return {   
            id:elem.id,
            name:elem.name,
            link:elem.html_url
          };
        })
      })  
    })
 }

 render(){ 
  return <Appcontainer
            userinfo = {this.state.userinfo}  
            repos = {this.state.repos}
            starred = {this.state.starred}
            isFetching = {this.state.isFetching}
            handleSearch = {(e)=>this.handleSearch(e)}
            handleStarred = {(e)=>this.handleStarred(e)}
            handleRepos = {(e)=>this.handleRepos(e)}
          />
 }
}

export default App;