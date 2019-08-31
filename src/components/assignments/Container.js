import React from 'react'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'

import * as assignments from '../../api/assignments'

import List from './List/List'
import EditForm from './Form/Edit.Form'
import NewForm from './Form/New.Form'
import Graded from './List/List.Graded'
import Ungraded from './List/List.Ungraded'

class Container extends React.Component {
  constructor (props) {
    super(props)

    this.createAssignment = this.createAssignment.bind(this)
    this.destroyAssignment = this.destroyAssignment.bind(this)
    this.editAssignment = this.editAssignment.bind(this)
    this.editScore = this.editScore.bind(this)
  }

  async createAssignment (assignment) {
    const { currentUserId, history, refreshUsers } = this.props
    await assignments.createAssignment({ user: { _id: currentUserId }, assignment })
    await refreshUsers()

    history.push(`/users/${currentUserId}/assignments`)
  }

  async destroyAssignment (assignment) {
    const { currentUserId, history, refreshUsers } = this.props
    await assignments.destroyAssignment({ user: { _id: currentUserId }, assignment })
    await refreshUsers()
    
    history.push(`/users/${currentUserId}/assignments`)
  }

  async editAssignment (assignment) {
    const { currentUserId, history, refreshUsers } = this.props
    await assignments.editAssignment({ user: { _id: currentUserId }, assignment })
    await refreshUsers()

    history.push(`/users/${currentUserId}/assignments`)
  }

  async editScore (assignment) {
    const { currentUserId, history, refreshUsers } = this.props
    await assignments.editScore({ user: { _id: currentUserId }, assignment })
    await refreshUsers()
    // history.push(`/users/${currentUserId}/assignments/assignment._id/score`)
    history.push(`/users/${currentUserId}/assignments/`)
  }

  render () {
    const { currentUserId, users, assignment } = this.props
    return (
      <>
        <Route path='/users/graded' exact component={() => {
          return <Graded
            currentUserId={currentUserId}
            users={users}
            assignment={assignment}
            onSubmit={this.editScore}
          />
        }} />
        <Route path='/users/ungraded' exact component={() => {
          return <Ungraded
            currentUserId={currentUserId}
            users={users}
            assignment={assignment}
            onSubmit={this.editScore}
          />
        }} />
        <Route path='/users/:userId/assignments' exact component={({ match }) => {
          const user = users.find(user => user._id === match.params.userId)
          return <List 
            currentUserId={currentUserId}
            destroyAssignment={this.destroyAssignment} 
            user={user} 
          />
        }} />
        <Route path='/users/:userId/assignments/new' exact component={() => {
          return <NewForm onSubmit={this.createAssignment} />
        }} />
        <Route path='/users/:userId/assignments/:assignmentId/edit' exact component={({ match }) => {
          const user = users.find(user => user._id === match.params.userId)
          const assignment = user.assignments.find(user => user._id === match.params.assignmentId)
          return <EditForm onSubmit={this.editAssignment} assignment={assignment} />
        }} />
      </>
    )
  }
}

export default withRouter(Container)
