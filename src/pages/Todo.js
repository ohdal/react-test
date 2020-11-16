import React, {Component} from 'react'
import TodoListTemplate from "../components/TodoListTemplate";
import Form from "../components/Form";
import TodoItemList from "../components/TodoItemList";
import Pallet from "../components/Pallet";
import {Map, List} from 'immutable'

class Todo extends Component {
  id = 3
  state = {
    data: Map({
      // 할일 목록
      input: '',
      todos: List([
        Map({id: 0, text: 'hi', checked: false, color: '#343a40'}),
        Map({id: 1, text: 'hi', checked: true, color: '#343a40'}),
        Map({id: 2, text: 'hi', checked: false, color: '#343a40'}),
      ]),
      colors: List([
        '#343a40', '#f03e3e', '#12b886', '#228ae6'
      ]),
      color: '',
    })
  }

  todoChange = (e) => {
    const {value} = e.target
    const {data} = this.state

    this.setState({
      data: data.set('input', value)
    })
  }

  todoCreate = () => {
    const {data} = this.state

    this.setState({
      data: data.set('input', '')
        .update('todos', todos => todos.concat({
          id: this.id++,
          text: data.get('input'),
          checked: false,
          color: data.get('color')
        }))
    })
  }

  todoKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.todoCreate()
    }
  }

  todoToggle = (id) => {
    const {data} = this.state

    const index = data.get('todos').findIndex(todo => todo.get('id') === id)
    const selected = data.get('todos').get(index)

    const nextTodos = [...data.get('todos')]

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      data: data.set('todos', nextTodos)
    })
  }

  todoRemove = (id) => {
    const {data} = this.state

    this.setState({
      data: data.update('todos', todos => todos.filter(todo => todo.id !== id))
    })
  }

  colorChange = (value) => {
    const {data} = this.state

    this.setState({
      data: data.set('color', value)
    })
  }

  render() {
    // 할일목록
    const {todoChange, todoCreate, todoKeyPress, todoToggle, todoRemove, colorChange} = this
    const {data} = this.state
    const input = data.get('input')
    const todos = data.get('todos')
    const colors = data.get('colors')
    const color = data.get('color')

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
