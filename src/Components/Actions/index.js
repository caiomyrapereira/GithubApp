'use strict';

import React from 'react';

const Actions  = (props)=>(
         <div className="actions">
          <button onClick={props.handleRepos} > Repositório </button>
          <button onClick={props.handleStarred} > Favoritos </button>
         </div> 
);

export default Actions;