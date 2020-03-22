import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const UserInfo = ({userinfo})=>( 
    <div  className="user_Info">
     <img src={userinfo.photo} />
     <h1>
      <a href={userinfo.link} > {userinfo.userName} </a>
     </h1>

     <div className="aboutMe">
      <p> {userinfo.bio} </p>
     </div>

     <div className="repos-Info" > 
      <ul>
       <li>Repositório:{ userinfo.repos } </li>
       <li>Seguidore:{ userinfo.followers } </li>
       <li>Seguindo:{ userinfo.following } </li>
      </ul>
     </div>
    </div>
)

UserInfo.propTypes = {
    userinfo:PropTypes.shape({
      userName:PropTypes.string.isRequired,
      bio:PropTypes.string.isRequired,
      photo:PropTypes.string.isRequired,
      link:PropTypes.string.isRequired,
      repos:PropTypes.number.isRequired,
      followers:PropTypes.number.isRequired,
      following:PropTypes.number.isRequired
    })
};

export default UserInfo;