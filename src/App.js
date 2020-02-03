import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Counter initialValue= {10}
      changeBy= {5}/>
      <Counter initialValue= {25}
      changeBy= {50}/>
      <Counter initialValue= {-5}
      changeBy= {20}/>
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
