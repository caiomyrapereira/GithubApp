'use strict';

import React from 'react';

const UserInfo = (props)=>( 
    <div  className="user-Info">
     <img src="https://avatars1.githubusercontent.com/u/29695906?v=4" />
     <h1>
      <a href="https://github.com/caiomyrapereira">Caio Myra</a>
     </h1>

     <div className="aboutMe">
      <p> Estudante de t.i </p>
     </div>

     <div className="repos-Info" > 
      <ul>
       <li>Repositório:21</li>
       <li>Seguidore:5</li>
       <li>Seguindo:9</li>
      </ul>
     </div>
    </div>
)

export default UserInfo;