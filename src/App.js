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
          <Transition 
          in={this.state.showBlock} 
          timeout={700}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('on enter')}
          onEntering={() => console.log('on entering')}
          onEntered={() => console.log('on entered')}
          onExit={() => console.log('on exit')}
          onExiting={() => console.log('on exiting')}
          onExited={() => console.log('on exited')}> 
            {state => (
              <div style={{
                  backgroundColor:'red',
                  width:'100px',
                  height:'100px',
                  margin: 'auto',
                  transition:'all .5s ease',
                  opacity: state === 'exiting' ? 0 : 1
                }}>
              </div>
          )}
            
          </Transition>
        
        <br/>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>

        {this.state.modalIsOpen ? <Backdrop show/>: null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
