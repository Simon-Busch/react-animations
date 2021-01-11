import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Transition from 'react-transition-group/Transition';

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <br/>

        <button onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))} className="Button">Toggle</button>
          {/* in => should be shown ? */}
          {/* check what's on the screen for the state of the animation */}
          {/* state refers to the application state */}
          <Transition in={this.state.showBlock} timeout={700}> 
            {state => <p>{state}</p>}
          </Transition>
        
        <br/>
        {this.state.modalIsOpen ? <Modal show={this.state.modalIsOpen}closed={this.closeModal}/> : null}
        {this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen}/>: null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
