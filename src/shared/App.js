import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Todo, Phone, CounterList} from '../pages'
import Menu from '../components/Menu.js'
// import CounterListContainer from "../containers/CounterListContainer";

import {createStore} from "redux";
import reducers from '../reducers'
import {Provider} from 'react-redux'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Route exact path="/" component={Todo}/>
        <Switch>
          <Route path="/phone/:id" component={Phone}/>
          <Route path="/phone" component={Phone}/>
        </Switch>
        <Provider store={store}>
          <Route exact path="/counter" component={CounterList}/>
        </Provider>
      </div>
    )
  }
}

export default App;
