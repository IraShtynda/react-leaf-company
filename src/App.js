import React from 'react';
import './App.css';
import Header from './Header/Header';
import Services from './Services/Services';
import Contacts from './Contacts/Contacts';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Services />
        <Contacts />
      </div>
    );
  }
}

export default App;
