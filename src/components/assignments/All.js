import React from 'react'
import { Link } from 'react-router-dom'

import Actions from './List/List.Actions'
// import EditGradeForm from '../Form/EditGrade.Form'

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
    <div key={user.assignment._id} className='card assignment'>
      <div className='card-body'>
        <h3 className='card-title'>{ user.assignment.title } test test</h3>
        <p className='card-text grade'>{ user.assignment.score } / { user.assignment.points_possible }</p>
        <p className='card-text description'>{ user.assignment.description }</p>
        <a href='{ assignment.project_link }' target='_blank' className='card-text'>{ user.assignment.project_link }</a>

        {/* <Actions 
          currentUserId={currentUserId}
          destroyAssignment={destroyAssignment} 
          assignment={assignment} 
          user={user} /> */}
      </div>
    </div>
  )

  return (
    <>
      <h2>Assignments</h2>
        { lis }
    </>
  )
}
