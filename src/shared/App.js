import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Todo, Phone} from '../pages'
import Menu from '../components/Menu.js'
import CounterContainer from "../containers/CounterContainer";


import {createStore} from "redux";
import reducers from '../reducers'
import {Provider} from 'react-redux'

const store = createStore(reducers)

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
          <Route exact path="/counter" component={CounterContainer}/>
        </Provider>
      </div>
    )
  }
}

export default App;
