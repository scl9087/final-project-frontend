import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import '../App.css'
import Header from './shared/Header'
import Navigation from './shared/Navigation/Navigation'
import Login from './auth/Login.Form'
import Signup from './auth/Signup.Form'
import UsersContainer from './users/Container'
import AssignmentsContainer from './assignments/Container'

import * as auth from '../api/auth'
import * as token from '../helpers/local-storage'


class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentUserId: null,
      isAdmin: false,
      loading: true,
      errorMessage: null,
      // assignments:''
    }

    this.loginUser = this.loginUser.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
    this.signupUser = this.signupUser.bind(this)
  }

  async componentDidMount () {
    try {
      if (token.getToken()) {
        const { user } = await auth.profile()
        // const assignments = await assignments.getAssignments();
        this.setState({ currentUserId: user._id, isAdmin: user.admin, loading: false })
      } 
    } catch (e) {
      console.error(e.message)
    }
    this.setState({ loading: false })
  }

  async loginUser (user) {
    const response = await auth.login(user)
    
    if (response.message) {
      this.setState({ errorMessage: response.message });
      return;
    }

    await token.setToken(response)
    const profile = await auth.profile()
    this.setState({ currentUserId: profile.user._id, isAdmin: profile.user.admin })
  }

  async signupUser (user) {
    const response = await auth.signup(user)
    
    if (response.message) {
      this.setState({ errorMessage: response.message });
      throw new Error(response.message)
    }
    
    await token.setToken(response)
    const profile = await auth.profile()
    this.setState({ currentUserId: profile.user._id, isAdmin: profile.user.admin })
  }

  logoutUser () {
    token.clearToken()
    this.setState({ currentUserId: null, isAdmin: false })
  }

  render () {
    const { currentUserId, isAdmin, loading } = this.state;
    if (loading) return <p>Loading...</p>
    return (
      <Router>
        <Header />
        <Navigation 
          currentUserId={currentUserId} 
          isAdmin={isAdmin}
          logoutUser={this.logoutUser}
        />
        <Switch>
          <Route path='/login' exact component={() => {
            return currentUserId ? <Redirect to='/users' /> : <Login onSubmit={this.loginUser} errorMessage={this.state.errorMessage} />
          }} />
          <Route path='/signup' exact component={() => {
            return currentUserId ? <Redirect to='/users' /> : <Signup onSubmit={this.signupUser} errorMessage={this.state.errorMessage} />
          }} />
          <Route path='/users' render={() => {
            return currentUserId
              ? <UsersContainer currentUserId={currentUserId} isAdmin={isAdmin}/>
              : <Redirect to='/login' />
          }} />
          <Route path='/users/assignments' render={() => {
            return currentUserId && isAdmin
              ? <AssignmentsContainer currentUserId={currentUserId} isAdmin={isAdmin}/>
              : <Redirect to='/login' />
          }} />
          <Redirect to='/login' />
        </Switch>
      </Router>
    )
  }
}

export default App
