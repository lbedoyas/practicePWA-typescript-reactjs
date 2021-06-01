import React from 'react';
import TiposBasicos from './typescript/TiposBasicos';
import ObjetosLiterales from './typescript/ObjetosLiterales';
import ContadorconHook from './components/ContadorconHook';
import Login from './components/Login';
import Usuarios from './components/Usuarios';

const  App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a Typescript v1</h1>
      <hr/>
      <TiposBasicos/>
      <hr/>
      <ObjetosLiterales/>
      <hr/>
      <ContadorconHook/>
      <hr />
      <Login/>
      <hr />
      <Usuarios/>
    </div>
  );
}

export default App;
