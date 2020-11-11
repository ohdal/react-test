import React, {Component} from 'react'
// import PhoneForm from "./components/PhoneForm";
// import PhoneInfoList from "./components/PhoneInfoList";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import Pallet from "./components/Pallet";

class App extends Component {
  id = 3
  state = {
    // 전화번호부
    info: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000',
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0000',
      }
    ],
    keyword: '',
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

  handleCreate = (data) => {
    const {info} = this.state
    this.setState({
      info: info.concat({id: this.id++, ...data})
    })
  }

  handleRemove = (id) => {
    const {info} = this.state
    this.setState({
      info: info.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const {info} = this.state
    this.setState({
      info: info.filter(info => info.id === id ? {...info, ...data} : info)
    })
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
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
    console.log('in')
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
    // 전화번호부
    // const {info, keyword} = this.state
    // const filteredLilst = info.filter(
    //   info => info.name.indexOf(keyword) !== -1
    // )

    // 할일목록
    const {input, todos, colors, color} = this.state
    const {todoChange, todoCreate, todoKeyPress, todoToggle, todoRemove, colorChange} = this

    return (
      // <div>
      //   <PhoneForm
      //     onCreate={this.handleCreate}/>
      //   <p>
      //     <input
      //       placeholder="검색 할 이름을 입력하세요.."
      //       onChange={this.handleChange}
      //       value={keyword}
      //     />
      //   </p>
      //   <PhoneInfoList
      //     data={filteredLilst}
      //     onRemove={this.handleRemove}
      //     onUpdate={this.handleUpdate}
      //   />
      // </div>
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

export default App;
