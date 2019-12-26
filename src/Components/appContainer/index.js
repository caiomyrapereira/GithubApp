'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';
import UserInfo from '../UserInfo';
import Actions from '../Actions';
import Repository from '../Repository';



const Appcontainer = ({ userinfo, repos, starred }) => (
     <div className="App">
     <Search />   
     { !!userinfo && <UserInfo   />}
     { !!userinfo && <Actions />}
     
     { !!repos.length && 
      <Repository className={'repos'} title={'Repositórios'}>
      <li><a href="">Nome do Repositório</a></li>
      </ Repository>
     }

     { !!starred.length && 
      <Repository className={'starred'} title={'Favoritos'} >
       <li><a href="">Nome do Favorito</a></li>
      </Repository>
     }

    </div>
);


Appcontainer.propTypes = {
	userinfo:PropTypes.object.isRequired, 
	repos:PropTypes.array.isRequired, 
	starred:PropTypes.array.isRequired
};


export default Appcontainer;