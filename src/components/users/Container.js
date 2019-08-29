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
      loading: true
    };
    this.refreshUsers = this.refreshUsers.bind(this);
  }

  async componentDidMount() {
    this.refreshUsers().then(() => this.setState({ loading: false }));
  }

  async refreshUsers() {
    const {response} = await users.getAllUsers();
    this.setState({ users: response });
  }

  render () {
    const { currentUserId } = this.props;
    const { users, loading } = this.state;
    if (loading) return <span />;
    return (
      <main className='container'>
        <Route path='/users' exact component={() => <List users={users} />} />
        <AssignmentsContainer 
          currentUserId={currentUserId}
          refreshUsers={this.refreshUsers}
          users={users} />
      </main>
    );
  }
}
