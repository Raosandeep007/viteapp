import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { UserDetails } from './components/UserDetails'
import { Counter } from './components/Counter'

function App() {
  return (
      <div className="App">
      <UserDetails name="Sandeep" add = "delhi" age="23" isMarried={true}/>
      <Counter/>
      <Counter/>
      </div>
  );
}

export default App
