import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const AuthenticatedLinks = ({ currentUserId, isAdmin, logoutUser, history, user }) => {
  const logout = () => {
    logoutUser() 
    history.push('/login')
  }
  
  return (
    <ul className='nav justify-content-start'>
      {currentUserId && !isAdmin ? (
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
        <Link className='nav-link' to='/users'>All Students</Link>
      </li>
      {currentUserId && isAdmin ? (
        <li className='nav-item'>
          <Link className='nav-link' 
            user={user} 
            to={`/users/ungraded`}
          >
              Ungraded Assignments
          </Link>
        </li>
      ) : (<li />
      )}
      {currentUserId && isAdmin ? (
        <li className='nav-item'>
          <Link className='nav-link' 
            user={user} 
            to={`/users/graded`}
          >
              Graded Assignments
          </Link>
        </li>
      ) : (<li />
      )}
      {currentUserId && !isAdmin ? (
        <li className='nav-item'>
          <Link className='nav-link' 
            user={user} 
            to={`/users/${currentUserId}/assignments/new`}
          >
              Create a New Assignment
          </Link>
        </li>
      ) : (<li />
      )}
      <li className='nav-item'>
        <button
          className='btn btn-link'
          onClick={logout}>
            Logout
        </button>
      </li>
      {currentUserId && isAdmin ? (
        <li className='nav-item'>
            <p>Welcome Admin!</p>
        </li>
      ) : null
      }
    </ul>
  )
}

export default withRouter(AuthenticatedLinks)
