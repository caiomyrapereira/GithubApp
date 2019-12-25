'use strict';

import React from 'react';
import Search from './Components/Search';
import UserInfo from './Components/UserInfo';
import Actions from './Components/Actions';
import Repository from './Components/Repository';

function App() {
  return (
    <div className="App">
     <Search />   
     <UserInfo />
     <Actions />
     
     <Repository className={'repos'} title={'Repositórios'}>
      <li><a href="">Nome do Repositório</a></li>
     </ Repository>

     <Repository className={'starred'} title={'Favoritos'} >
      <li><a href="">Nome do Favorito</a></li>
     </Repository>

    </div>
  );
}

export default App;
