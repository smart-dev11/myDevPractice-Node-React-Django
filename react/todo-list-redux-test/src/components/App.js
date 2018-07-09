import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo onAddClick={()=>console.log('onAddClick')}/>
        <TodoList onTodoClick={()=>console.log('onTodoClick')} todos={[]} />
        <Footer onFilterChange={()=>console.log('onFilterChange')} filter={'SHOW_ALL'}/>
      </div>
    );
  }
}

export default App;
