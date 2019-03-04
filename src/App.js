import React, { Component } from 'react';
import './App.css';
import Box from './components/Box';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      inputValue: ''
    }
    this.onChange = this.onChange.bind(this);
    this.myRef = React.createRef();
    this.subMethod = this.subMethod.bind(this); 
  }

  onChange(event){
    this.setState({inputValue: event.target.value })
  }
  subMethod(event){
    event.preventDefault();
    console.log("-----------------------");
    console.log(this.state.inputValue)
    console.log(this.myRef.current.value);
  }

  render() {
    return (
      <div className="App">
        <h1>Counter: {this.props.count}</h1>
        <Box name="increment" fun={this.props.increment}/>
        <Box name="decrement" fun={this.props.decrement}/>
        <Box name="pow" fun={this.props.pow}/>
        <Box name="restart" fun={this.props.restart}/>
        <div>
          <form onSubmit={this.subMethod}>
            <input value={this.state.inputValue} onChange={this.onChange}></input>
            <br/>
            <input ref={this.myRef} ></input>
            <input type="submit" value="submit"/>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateProps = state =>{
  return{
    count: state.count
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    increment: () => dispatch({type: 'INC'}),
    decrement: () => dispatch({type: 'DEC'}),
    pow: () => dispatch({type: 'POW'}),
    restart: () => dispatch({type: 'RES'})
  }
}
export default connect(mapStateProps, mapDispatchToProps)(App);
