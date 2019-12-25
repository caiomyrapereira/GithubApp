'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const Repository = (props)=>(
        <div className={props.className} >
         <h2> {props.title}: </h2>
         <ul>
          {props.children}
         </ul>
        </div>
);

Repository.defaultProps ={
	className:'',
}

Repository.propTypes ={
	className:PropTypes.string,
	title:PropTypes.string.isRequired,
	children:PropTypes.element.isRequired
}

export default Repository;
