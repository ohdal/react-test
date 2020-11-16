import React, {Component} from 'react'
import CounterListContainer from "../containers/CounterListContainer";
import Buttons from "../components/Buttons";

import {connect} from 'react-redux'
import * as actions from '../actions'

import {getRandomColor} from "../utils";

class CounterList extends Component {
  render() {
    const {onCreate, onRemove} = this.props
    return (
      <div>
        <Buttons
          onCreate={onCreate}
          onRemove={onRemove}
        />
        <CounterListContainer/>
      </div>
    );
  }
}

// 액션함수 준비
const mapToDispatch = (dispatch) => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: (index) => dispatch(actions.remove(index))
});

// 리덕스에 연결을 시키고 내보낸다
export default connect(null, mapToDispatch)(CounterList);
