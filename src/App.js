import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { addTodo } from "./stores/actions/addTodo";
import PropTypes from "prop-types"


const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

@connect(mapStateToProps, {addTodo})
class App extends Component {
  componentDidMount () {
    this.props.addTodo(11)
    console.log(this.props)
  }
  render() {
    console.log(this.props.todos)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array,
  addTodo: PropTypes.func
}

export default App;
