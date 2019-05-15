import React from 'react';
import logo from './logo.svg';
import './App.css';

import CustomButton from './components/CustomButton'
import CustomModal from './components/CustomModal'

class App extends React.PureComponent {

  constructor (props) {
    super(props)

    this.state = {
      modalVisible: false,
      title: ''
    }
  }

  openModal (title) {
    this.setState({ modalVisible: true, title })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with Sabbyt
          </a>
  
          <CustomButton 
            title={'Blue'}
            variant={'primary'}     
            onClick={() => { this.openModal('Blue') }}       
          />
  
          <CustomButton 
            title={'Red'}
            variant={'danger'}
            onClick={() => { this.openModal('Red') }}
          />
  
          <CustomModal
              title={this.state.title}
              show={this.state.modalVisible}              
              onHide={() => { this.setState({ modalVisible: false })}}
            />
  
          
        </header>
      </div>
    );
  }
}

export default App;
