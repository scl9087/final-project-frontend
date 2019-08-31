import React from 'react'
import { Route } from 'react-router-dom'

import * as users from '../../api/users'

import List from './List/List'
import AssignmentsContainer from '../assignments/Container'

export default class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      assignmentsArray: [],
      loading: true
    };
    this.refreshUsers = this.refreshUsers.bind(this);
    this.refreshAssignments = this.refreshAssignments.bind(this);
  }

  async componentDidMount() {
    this.refreshUsers().then(() => this.setState({ loading: false }));
    this.refreshAssignments()
  }

  async refreshUsers() {
    const {response} = await users.getAllUsers();
    this.setState({ users: response });
  }

  async refreshAssignments() {
    const {response} = await users.getAllAssignments();
    this.setState({ assignmentsArray: response });
  }

  render () {
    const { currentUserId, isAdmin } = this.props;
    const { users, assignmentsArray, loading } = this.state;
    if (loading) return <span />;
    
    return (
      <main className='container'>
        <Route path='/users' exact component={() => <List users={users} />} />
        <AssignmentsContainer 
          currentUserId={currentUserId}
          isAdmin={isAdmin}
          refreshUsers={this.refreshUsers}
          refreshAssignments={this.refreshAssignments}
          users={users} 
          assignmentsArray={assignmentsArray}
          />
      </main>
    );
  }
}
