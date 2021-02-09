import React from 'react';
import { Helmet } from 'react-helmet'

const Portfolio = () => {
  return (
    <>
    <Helmet>
        <title>Meu Site | Portfolio</title>
    </Helmet>
    <h3>Que bom saber que você se interessou pelo meu trabalho!</h3>

    <h4>Aqui está uma lista com os meus favoritos até o momento:</h4>
    <br />

    <h4><a href="https://github.com/anaprzsiczny/projeto-curriculo-react">Meu currículo desenvolvido em React</a></h4>
    <p>Esse projeto foi desenvolvido na segunda semana da formação React do Campinas Tech Talents, orientado pela professora <a href= "https://github.com/jenicarvalho">Jeniffer Carvalho</a>.</p>
    <br />

    <h4><a href="https://github.com/anaprzsiczny/projeto-instagram">Um clone do Instagram</a></h4>
    <p>Esse projeto também foi desenvolvido na formação React do Campinas Tech Talents, em TypeScript, como um clone da rede social Instagram. Ele consome 3 API's e utiliza Redux.</p>
    <br />
    
    <h4><a href="https://github.com/anaprzsiczny/MusicDot-Caelum">O site de uma escola de música</a></h4>
    <p>Esse projeto foi feito com o intuito de aprender um pouco mais de HTML e CSS com a apostila da <a href="https://www.caelum.com.br/">Caelum</a>.</p>
    <br />
    </>
  );
}

export default Portfolio