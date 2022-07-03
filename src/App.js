import React from 'react';
import './App.css';
import Header from './Header/Header';
import Services from './Services/Services';
import Contacts from './Contacts/Contacts';

class App extends React.Component {

  render() {
    const adressTitle = 'Address';
    const adressText = '999 Jamaica Ave, Brooklyn, \nNY 11208, USA';

    return (
      <div>
        <Header />
        <Services />
        <Contacts title={adressTitle} text={adressText} />
      </div>
    );
  }
}

export default App;
