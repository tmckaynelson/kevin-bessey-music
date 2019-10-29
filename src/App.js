import React, { useState, useEffec} from 'react'
import { Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Admin from './components/Admin'

import './reset.css'
import './App.css'

function App() {

  const [ user, setUser ] = useState(''); // hooks used to set state to keep track if admin is logged in
  

  return (
    <div className="App">
      <Nav user={ user }/>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/admin" render={ () => <Admin user={ user } setUser={ setUser }/> } /> {/* render is used to allow props to be passed down */}
      </Switch>
    </div>
  )
}

export default App
