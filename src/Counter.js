import React from 'react';

class Counter extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            initialValue: props.value,
            // changeBy: props.changeBy
        }
    }
    render () {
        return (
            <div>
                <h1>
                    {this.props.value}
                </h1>
                    <button onClick= {this._incrementValue}> Add </button>
                    <button onClick= {this._reduceValue}> Subtract </button>
                    <button onClick= {this._resetValue}> Reset </button>
            </div>
        );
    }

    // Write helper functions as arrow functions. Arrow functions retain the correct
    // value of the THIS keyword
    _incrementValue = () => {
        const newVal = this.props.value + this.props.changeBy;
        this.props.clickHandler(this.props.index, newVal);
        // this.setState({
        //     value: this.state.value + this.state.changeBy
        // });
    }
    _reduceValue = () =>{
        const newVal = this.props.value - this.props.changeBy;
        this.props.clickHandler(this.props.index, newVal);
        // this.setState({
        //     value: this.state.value - this.state.changeBy
        // });
    }
    _resetValue = () => {
        this.props.clickHandler(this.props.index,
            this.state.initialValue)
        // this.setState({
        //     value: this.props.initialValue
        // });
    }

}


export default Counter;