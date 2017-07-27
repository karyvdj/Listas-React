import React from "react";
import ListaItem from "./ListaItem.jsx";

export default class Lista extends React.Component{
  render(){
    let arregloDeLis = this.props.elementosLista.map((textoElemento)=>{
        return (
          <ListaItem textoItem ={textoElemento}/>
        );
    });
    return(
      <ul>
        <h2>{this.props.tituloLista}</h2>
        {arregloDeLis}
      </ul>
    )
  }
}
