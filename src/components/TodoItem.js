import React, {Component} from 'react';
import './TodoItem.scss'

class TodoItem extends Component {
  render() {
    const {color, text, checked, id, onToggle, onRemove} = this.props

    return (
      // onClick={onToggle(id)} X
      // 이렇게 쓰면 렌더링될때 호출 -> 데이터변경(리렌더링) -> 렌더링시 호츨
      // 무한반복됨
      <div className="todo-item" onClick={()=> onToggle(id)}>
        <div className="remove" onClick={(e)=>{
          e.stopPropagation() // onToggle 이벤트 확산 막기위함
          onRemove(id)
        }}>
          X
        </div>
        <div className={`todo-text ${checked ? 'checked' : ''}`}>
          <div style={{color: color}}>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">√</div>)
        }
      </div>
    )
  }
}

export default TodoItem;
