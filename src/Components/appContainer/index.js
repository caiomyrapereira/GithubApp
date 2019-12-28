'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';
import UserInfo from '../UserInfo';
import Actions from '../Actions';
import Repository from '../Repository';



const Appcontainer = ({ userinfo, repos, starred, handleSearch , handleStarred , handleRepos }) => (
     <div className="App">
     <Search handleSearch={handleSearch} />   
     { !!userinfo && <UserInfo   userinfo={userinfo}  />}
     { !!userinfo && <Actions handleStarred={handleStarred} handleRepos={handleRepos} />}
     
     { !!repos.length && 
      <Repository className={'repos'} title={'Repositórios'} repos={repos}  />
   
     }

     { !!starred.length && 
      <Repository className={'starred'} title={'Favoritos'} repos={starred} / >
     }

    </div>
);


Appcontainer.propTypes = {
	userinfo:PropTypes.object, 
	repos:PropTypes.array.isRequired, 
	starred:PropTypes.array.isRequired
};


export default Appcontainer;