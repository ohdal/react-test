import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Todo, Phone} from '../pages'
import Menu from '../components/Menu.js'

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
      </div>
    )
  }
}

export default App;
