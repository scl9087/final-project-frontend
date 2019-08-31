import React from 'react'
import Form from '../Form/UpdateGrade.Form'

export default ({ users, onSubmit }) => {
  let assignmentsArray = []
  for (let i = 0; i < users.length; i++) {
    for (let a = 0; a < users[i].assignments.length; a++) {
        const user = {
          first_name: users[i].first_name,
          last_name: users[i].last_name,
          email: users[i].email,
          assignment: users[i].assignments[a]
        }
        assignmentsArray.push(user)
    }
  }

  const lis = assignmentsArray.map(user =>
    ( !user.assignment.score && (
      <div key={user.assignment._id} className='card assignment'>
        <div className='card-body'>
          <h3 className='card-title'>{ user.assignment.title }</h3>
          <Form 
            onSubmit={onSubmit} 
            assignment={user.assignment}
          />
          <p className='card-text description'>{ user.assignment.description }</p>
          <a href='{ assignment.project_link }' target='_blank' className='card-text'>{ user.assignment.project_link }</a>
        </div>
      </div>
    ))
  )

  return (
    <>
      <h2>Ungraded Assignments</h2>
        { lis }
    </>
  )
}
