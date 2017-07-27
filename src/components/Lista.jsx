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
        <h4>{this.props.tituloLista}</h4>
        {arregloDeLis}
      </ul>
    )
  }
}
