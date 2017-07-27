import React from "react"

export default class ListaMenu extends React.Component{
  render(){
    return(
      <li>
        <a href={this.props.textoLink}>
          {this.props.textoItem}
        </a>
      </li>
    );
  }
}
