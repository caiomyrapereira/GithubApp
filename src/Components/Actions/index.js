'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const Actions  = (props)=>(
         <div className="actions">
          <button onClick={props.handleRepos} > Repositório </button>
          <button onClick={props.handleStarred} > Favoritos </button>
         </div> 
);

Actions.propTypes ={
	handleRepos:PropTypes.func.isRequired,
	handleStarred:PropTypes.func.isRequired
};

export default Actions;