import React, {Component} from 'react'
import TodoListTemplate from "../components/TodoListTemplate";
import Form from "../components/Form";
import TodoItemList from "../components/TodoItemList";
import Pallet from "../components/Pallet";

class Todo extends Component {
  id = 3
  state = {
    // 할일 목록
    input: '',
    todos: [
      {id: 0, text: 'hi', checked: false, color: '#343a40'},
      {id: 1, text: 'hi', checked: true, color: '#343a40'},
      {id: 2, text: 'hi', checked: false, color: '#343a40'},
    ],
    colors: [
      '#343a40', '#f03e3e', '#12b886', '#228ae6'
    ],
    color: '',
  }

  todoChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  todoCreate = () => {
    const {input, todos, color} = this.state
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: color,
      })
    })
  }

  todoKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.todoCreate()
    }
  }

  todoToggle = (id) => {
    const {todos} = this.state

    const index = todos.findIndex(todo => todo.id === id)
    const selected = todos[index]

    const nextTodos = [...todos]

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      todos: nextTodos
    })
  }

  todoRemove = (id) => {
    const {todos} = this.state
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  colorChange = (value) => {
    this.setState({
      color: value
    })
  }

  render() {
    // 할일목록
    const {input, todos, colors, color} = this.state
    const {todoChange, todoCreate, todoKeyPress, todoToggle, todoRemove, colorChange} = this
    return (
      <TodoListTemplate pallet={<Pallet colors={colors} colorChange={colorChange}/>}
                        form={
                          <Form
                            value={input}
                            color={color}
                            onKeyPress={todoKeyPress}
                            onChange={todoChange}
                            onCreate={todoCreate}
                          />}>
        <TodoItemList todos={todos} onToggle={todoToggle} onRemove={todoRemove}/>
      </TodoListTemplate>
    )
  }
}
 export default Todo
