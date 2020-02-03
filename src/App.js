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
        1111,
        90,
        33,
        23423,
        1234123
      ],
      changeBy: [
        2,
        33,
        1,
        1,
        1
      ]
  };
}
  render(){
    return (
      <div>
        {
          this.state.values.map((num, index)=>{
            return (
              <Counter 
                key = {index}
                index = {index}
                value = {num}
                addHandler= {() =>{
                  this._incrementAll(this.state.changeBy[index])
                }}
                subtractHandler = {()=>{
                  this._decreaseAll(this.state.changeBy[index])
                }}
                resetHandler={this._updateValue}
                />
            )
        })

      }
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
  
  _incrementAll = (howMuch) =>{
    const newValues= this.state.values.map(num=> num + howMuch);
    this.setState({
      values: newValues
    });
  }
  
  _decreaseAll = (howMuch) =>{
    const newValues= this.state.values.map(num=> num - howMuch);
    this.setState({
      values: newValues
    });
  }
}
// function App() {
// }

export default App;