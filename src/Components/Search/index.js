import React from 'react';
import PropTypes from 'prop-types';
import './style.css'


const Search =({ handleSearch })=>(
     <div className="search">
      <input data-js="search" type="search" placeholder="Digite o nome do usuário no Gihhub"/>
      <button className="searchUser"   onClick={ handleSearch } > 
        search 
      </button>
     </div>
);

Search.propTypes ={
  handleSearch:PropTypes.func.isRequired
}


export default Search;