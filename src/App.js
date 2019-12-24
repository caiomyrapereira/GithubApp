import React from 'react';


function App() {
  return (
    <div className="App">
         <div className="search">
           <input type="search" placeholder="Digite o nome do usuário no Gihhub"/>
           <button> search </button>
         </div>

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

           <div class="actions">
             <button> Repositório </button>
             <button> Favoritos </button>
           </div> 

           <div className="repos">
            <h2> Respositórios: </h2>
            <ul>
             <li><a href="">Nome do repositório</a></li>
            </ul>
           </div>

           <div className="starred">
             <h2>Favoritos:</h2>
             <ul>
               <li><a href="">Nome do favorito</a></li>
             </ul>
           </div>

         </div>
    </div>
  );
}

export default App;
