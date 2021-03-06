import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoItemList extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // todos 에 변화가 있을때먄 리렌더링
    // shouldComponentUpdate 조건걸어주지않으면 input에 값이 변화될때마다 리렌더링된다.
    return this.props.todos !== nextProps.todos
  }

  render() {
    const {todos, onToggle, onRemove} = this.props

    const todoList = todos.map((todos) => (
      <TodoItem
        id={todos.get('id')}
        text={todos.get('text')}
        color={todos.get('color')}
        checked={todos.get('checked')}
        onToggle={onToggle}
        onRemove={onRemove}
        key={todos.get('id')}
      />
    ))

    return (
      <div>
        {todoList}
      </div>
    )
  }
}

export default TodoItemList;
