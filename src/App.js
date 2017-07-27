import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu.jsx";
import Lista from "./components/Lista.jsx";

class App extends Component {
  constructor(){
    super();
    this.state = {nuevoItemTexto:"", arregloItems:[]}
    this.manejarCambio = this.manejarCambio.bind(this);
    this.agregarLista = this.agregarLista.bind(this);
  }
  agregarLista(){
    this.state.arregloItems.push(this.state.nuevoItemTexto);
    this.setState({nuevoItemTexto:""})
  }
  manejarCambio(event){
    let inputValue = event.target.value;
    this.setState({nuevoItemTexto:inputValue});
  }
  render() {
    return (
      <div className="App">
        <Menu className="nav-wrapper"/>
        <input value={this.state.nuevoItemTexto} type="text" onChange={this.manejarCambio} className="input-field col s6"></input>
        <button onClick={this.agregarLista} className="waves-effect waves-light btn">Enviar</button>
        <div className="contenedor-Listas">
          <Lista tituloLista = "HELADOS" elementosLista ={this.state.arregloItems}/>
        </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
