import React from 'react';
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <>
    <Helmet>
        <title>Meu Site | Contato</title>
    </Helmet>
    <h3>Caso tenha alguma dúvida ou sugestão, você pode entrar em contato comigo pelos seguintes meios:</h3>
    <ul>
      <li>Telefone: (19) 99123-4567</li>
      <li>E-mail: ana.przsiczny@gmail.com</li>
      <li><a href="https://github.com/anaprzsiczny" target="_blank">Github</a></li>
      <li><a href="https://www.linkedin.com/in/ana-julia-przsiczny/" target="_blank">LinkedIn</a></li>
    </ul>
    <br />
    <h3>Ou, se preferir, é só preencher o formulário abaixo com as suas informações:</h3>
    <br />
    
    <form>
      <label>Nome: </label>
      <input type="text"></input>
      <br />
      <label>E-mail: </label>
      <input type="email"></input>
      <br />
      <br />
      <label>Dúvida ou sugestão: </label>
      <br />
      <textarea cols={80} rows={10}></textarea>
      <br />
      <button>Enviar</button>
    </form>
    </>
  );
}

export default Contact