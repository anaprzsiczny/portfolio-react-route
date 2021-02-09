import React from 'react';
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Meu Site | Página Inicial</title>
      </Helmet>
      <h1>Olá, visitante!</h1>
      <h3>Seja bem-vindo.</h3>
      <p>Meu nome é Ana Júlia, e eu sou estudante de desenvolvimento de sistemas com foco em front-end.</p>
      <h3>Antes de tudo, aqui estão algumas coisas importantes que você precisa saber:</h3>
      <p>Este é um projeto em construção!</p>
      <p>Estou montando para fins de aprendizado.</p>
      <p>Sugestões são sempre muito bem-vindas.</p>
      <p>No momento, estou estudando as seguintes tecnologias: </p>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>HTML 5</li>
        <li>CSS</li>
      </ul>
      <p>Os links para entrar em contato comigo ou conhecer um pouquinho do que já aprendi estão no topo da página</p>
    </>
  );
}

export default Home