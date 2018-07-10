import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { VisibilityFilters } from '../actions/ActionTypes';


class App extends Component {
  render() {
    return (
      <div>
        <AddTodo onAddClick={this.props.handleAddTodo}/>
        <TodoList todos = {this.props.visibleTodos}
                  onTodoClick={this.props.handleToggleTodo}/>
        <Footer filter={this.props.visibilityFilter}
                onFilterChange={this.props.handleSetVisibilityFilter}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddTodo: (text) => {dispatch(actions.addTodo(text))},
    handleToggleTodo: (id) => {dispatch(actions.toggleTodo(id))},
    handleSetVisibilityFilter: (filter) => {dispatch(actions.setVisibilityFilter(filter))}
  }
};

const selectTodos = (todos, filter) => {
  switch (filter) {
  case VisibilityFilters.SHOW_ALL:
    return todos;
  case VisibilityFilters.SHOW_COMPLETED:
    return todos.filter(todo => todo.completed);
  case VisibilityFilters.SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed);
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
