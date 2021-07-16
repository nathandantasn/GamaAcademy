import React, {useState} from "react";
import axios from 'axios';
import * as S from './styled';

function App(props) {
  const [usuario, setUsuario] = useState('');
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response))
  }
  return (
    <S.Container>
    <S.Input  className="usuarioInput" value={usuario} placeholder="Usuário" onChange={e => setUsuario(e.target.value)}/>
    <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
  );
}

export default App;
