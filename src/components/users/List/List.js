import React from 'react'
import { Link } from 'react-router-dom'

export default ({ users }) => {
  const lis = users.map(user => (
    <Link to={`/users/${user._id}/assignments`}>
      <li key={user._id}>
        <strong>{user.first_name}</strong> - {user.email}
      </li>
    </Link>
  ))

  return (
    <>
      <h1>All Students</h1>
      <ul className='student-list'>
        { lis }
      </ul>
    </>
  )
}
