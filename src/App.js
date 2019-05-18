import React from "react";
import { Form, Input, Scope } from "@rocketseat/unform";
import api from './services/api';
import './index.css';

function App() {
  function handleSubmit(data) {
    console.log(data);

    const ar = api.get('usuario');

    console.log(ar);

    api.post('fazenda', data)

  };

  return (
    <div className="login-wrapper">
      <h1 className="title">Cadastro de Fazenda</h1>
      <Form onSubmit={handleSubmit}>
        <Input name="codigo"  placeholder="Código"/> <br/>
        <Input name="nome"  placeholder="Nome"/> <br/>


        <h3 className="title">Fazenda:</h3>
        <Scope path="fazenda">
          <Input name="talhao"  placeholder="Talhão"/> <br/>
          <Input name="propriedade"  placeholder="Propriedade" />
        </Scope>
        <br />
        
        <h3 className="title">Medidas:</h3>
        <Scope path="medidas">
          <Input name="hectares"  placeholder="Hectares"/> <br/>
          <Input name="metros"  placeholder="Metros" /> <br/>
          <Input name="ares"  placeholder="Ares" /> 
        </Scope>

        <h3 className="title">Plantas:</h3>
        <Scope path="plantas">
          <Input name="graos"  placeholder="Grãos"/> <br/>
          <Input name="cafe"  placeholder="Café" /> <br/>
          <Input name="cana"  placeholder="Cana" /> 
        </Scope>


        <button type="submit">Salvar</button>
      </Form>
    </div>
   
  );
}

export default App;
