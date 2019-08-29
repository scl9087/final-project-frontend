import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default ({ currentUserId, destroyAssignment, assignment, user }) => (
  <div className='button-container'>
    { currentUserId === user._id && (
        <>
          <Link className='btn assignment edit' to={`/users/${user._id}/assignments/${assignment._id}/edit`}>Edit</Link>
          <button
            className='btn assignment delete'
            onClick={() => destroyAssignment(assignment)}>
            Delete
          </button>
        </>
      )
    }
  </div>
)