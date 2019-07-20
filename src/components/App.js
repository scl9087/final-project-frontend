import React from 'react'
import Header from './shared/Header'
import Navigation from './shared/Navigation'

class App extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <>
        <Header />
        <Navigation />
      </>
    )
  }
}

export default App
