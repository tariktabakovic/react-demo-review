import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Counter from './Counter';


// I want to move the state of the counters (and their behaviors) into the App.
// I have to lift the state up so that the Counters can share state (and behaviors).
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      values: [
        10,
        99
      ]
  };
}
  render(){
    return (
      <div>
        <Counter 
        value= {this.state.values[0]}
        changeBy= {5}
        clickHandler= {this._updateValue}
        index= {0}
        />
        <Counter 
        value= {this.state.values[1]}
        changeBy= {50}
        clickHandler= {this._updateValue}
        index= {1}
        />
        {/* <Counter initialValue= {-5}
        changeBy= {20}/> */}
        {/* <Greet 
        whom= 'Cthulu'
        how= 'Salutations'
        />
        <Greet 
        whom= 'Tarik'
        how= 'Holaa'
        /> */}
      </div>
    );
  }
  _updateValue = (index, newValue) =>{
    // make a copy of the current value array
    const newValues = [
      ...this.state.values
    ];  
    
    // modify the copy
    newValues[index] = newValue;

    // update state with the new copy 
    this.setState({
      values: newValues
    });
  }
}

// function App() {
// }

export default App;
