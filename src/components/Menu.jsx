import React from "react";
import ListaMenu from "./ListaMenu.jsx"

export default class Menu extends React.Component {
  render() {  //metodo para regresar el html
    return(
      <nav>
        <ul>
          <ListaMenu textoItem="INICIO" textoLink="https://www.google.com.mx/"/>
          <ListaMenu textoItem="ACERCA DE MÍ"/>
          <ListaMenu textoItem="CONTACTO"/>
        </ul>
      </nav>
    );
  }
}
