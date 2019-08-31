import React from 'react'
import { Link } from 'react-router-dom'

export default ({ users }) => {
  const lis = users.map(user => (
    <Link to={`/users/${user._id}/assignments`}>
      {/* { !user.admin ? ( */}
        <li key={user._id}>
          <span><strong>{user.first_name} {user.last_name}</strong> - {user.email}</span>
          {( user.grade ? (
            <span className='right'>{user.grade}</span>
          ): (<span className='right'>TBD</span>)
          )}
          
          {/* { isAdmin ? (
            <span className='right'>test{user.grade}</span>
            ) : null
          } */}
        </li>
         {/* ) : null */}
       {/* } */}
      
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