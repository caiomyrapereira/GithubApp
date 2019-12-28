'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const Repository = (props)=>(
        <div className={props.className} >
         <h2> {props.title}: </h2>
         <ul>
           {
            props.repos.map((elem ,index)=>{
              return  <li key={index} ><a key={index} href={elem.link}> {elem.name} </a></li>
            })
           }
         </ul>
        </div>
);

Repository.defaultProps ={
	className:'',
}

Repository.propTypes ={
	className:PropTypes.string,
	title:PropTypes.string.isRequired,
    repos:PropTypes.array.isRequired
}

export default Repository;
