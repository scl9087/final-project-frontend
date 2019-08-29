import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const AuthenticatedLinks = ({ currentUserId, logoutUser, history, user }) => {
  const logout = () => {
    logoutUser() 
    history.push('/login')
  }
  
  return (
    <ul className='nav justify-content-start'>
      {currentUserId ? (
        <li className='nav-item'>
          <Link className='nav-link' 
            user={user} 
            to={`/users/${currentUserId}/assignments`}
          >
              Home
          </Link>
        </li>
      ) : (<li />
      )}
      <li className='nav-item'>
        <Link className='nav-link' to='/users'>All Users</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={`/users/${currentUserId}/assignments/new`}>
          Create a New Assignment
        </Link>
      </li>
      <li className='nav-item'>
        <button
          className='btn btn-link'
          onClick={logout}>
            Logout
        </button>
      </li>
    </ul>
  )
}

export default withRouter(AuthenticatedLinks)
