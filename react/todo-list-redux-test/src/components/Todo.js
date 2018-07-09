import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  render() {
    const style = {
      textDecoration: this.props.completed ? 'line-through' : 'none',
      cursor: this.props.completed ? 'default' : 'pointer'
    }

    return (
      <li onClick={this.props.onClick} style={style}> {this.props.text} </li>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}

export default Todo;
