import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Menu from "./components/Menu.jsx";
import Lista from "./components/Lista.jsx";
import {Navbar,NavItem,Col,Row,Button,Icon,CardPanel} from "react-materialize";

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
        <Navbar right className="pink darken-4 white-text">
          <NavItem href='#'><Icon>beach_access</Icon></NavItem>
        	<NavItem href='#'>Listas</NavItem>
        	<NavItem href='#'>Ventas</NavItem>
        </Navbar>
        <Row>
          <Col s={12} m={4} offset="m4">
            <input value={this.state.nuevoItemTexto} type="text" onChange={this.manejarCambio}></input>
            <Button onClick={this.agregarLista} waves="light">Añadir <Icon right>send</Icon></Button>
          </Col>
        </Row>
        <Row>
          <Col s={12} m={4} offset="m4">
            <CardPanel className="grey lighten-3 black-text left-align">
              <Lista tituloLista = "Helados" elementosLista ={this.state.arregloItems}/>
            </CardPanel>
          </Col>
        </Row>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
