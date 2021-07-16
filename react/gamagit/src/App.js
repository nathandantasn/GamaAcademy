import React, {useState} from "react";
import axios from 'axios';

function App(props) {
  const [usuario, setUsuario] = useState('');
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response))
  }
  return (
    <>
    <input  className="usuarioInput" value={usuario} placeholder="Usuário" onChange={e => setUsuario(e.target.value)}/>
    <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;
