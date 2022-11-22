import React from "react";
import { useRequestData } from "./hooks/useRequestData";
import { BASE_URL } from "./constants/constants";
import { BASE_URL2 } from "./constants/constants2";
//import axios from "axios";
// import { useCapturarNome } from "./hooks/useCapturarNome";
// import { useCapturarPostagens } from "./hooks/useCapturarPostagens";

function App() {
  //const [nomeUsuarios, setNomeUsuarios] = useState([]);
  //const [postagens, setPostagens] = useState([]);

  //const nomeUsuarios = useCapturarNome();
  const [nomeUsuarios, isLoadind, erro] = useRequestData(`${BASE_URL}users`);
  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}users`)
  //     .then((response) => {
  //       setNomeUsuarios(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  //const postagens = useCapturarPostagens();
  const [postagens, isLoadind2, erro2] = useRequestData(`${BASE_URL}comments`);
  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}comments`)
  //     .then((response) => {
  //       setPostagens(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });
  const [personagens, isLoadind3, erro3] = useRequestData(`${BASE_URL2}`);
  return (
    <>
      <p>Exercício 1</p>
      {isLoadind && <p>Carregando</p>}
      {!isLoadind && erro && <p>Ocorreu um erro</p>}
      {!isLoadind &&
        nomeUsuarios.map((usuario) => {
          return <p key={usuario.id}>{usuario.name}</p>;
        })}
      <hr />
      <p>Exercício 2</p>
      {isLoadind2 && <p>Carregando</p>}
      {!isLoadind2 && erro2 && <p>Ocorreu um erro</p>}
      {!isLoadind2 &&
        postagens.map((post) => {
          return <p key={post.id}>{post.body}</p>;
        })}
      <hr />
      <p>Exercício 3</p>
      {isLoadind3 && <p>Carregando</p>}
      {!isLoadind3 && erro3 && <p>Ocorreu um erro</p>}
      {!isLoadind3 &&
        personagens.map((personagem) => {
          return <p key={personagem.id}>{personagem.name}</p>;
        })}
    </>
  );
}

export default App;
