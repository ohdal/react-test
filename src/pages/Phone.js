import React, {Component} from 'react'
import PhoneForm from "../components/PhoneForm";
import PhoneInfoList from "../components/PhoneInfoList";

class Phone extends Component {
  id = 2
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

  render() {
    // 전화번호부
    const {info, keyword} = this.state
    const filteredLilst = info.filter(
      info => info.name.indexOf(keyword) !== -1
    )

    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}/>
          <p>{this.props.match.params.id}</p>
        <p>
          <input
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <PhoneInfoList
          data={filteredLilst}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default Phone
