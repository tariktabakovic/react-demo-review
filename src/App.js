import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';

function App() {
  return (
    <div>
      <Greet 
      whom= 'Cthulu'
      how= 'Salutations'
      />
      <Greet 
      whom= 'Tarik'
      how= 'Holaa'
      />
    </div>
  );
}

export default App;
