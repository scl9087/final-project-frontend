import React from 'react'

import Actions from './List.Actions'

export default ({ currentUserId, isAdmin, destroyAssignment, user }) => {
  const assignments = user.assignments.map(assignment => (
    <div key={assignment._id} className='card assignment'>
      <div className='card-body'>
        <h3 className='card-title'>{ assignment.title }</h3>
        <p className='card-text grade'>{ assignment.score } / { assignment.points_possible }</p>
        <p className='card-text description'>{ assignment.description }</p>
        <a href='{ assignment.project_link }' target='_blank' className='card-text'>{ assignment.project_link }</a>
      
        <Actions 
          currentUserId={currentUserId}
          isAdmin={isAdmin}
          destroyAssignment={destroyAssignment} 
          assignment={assignment} 
          user={user} />
        </div>
    </div>
  ));

  if (assignments.length === 0) {
    return (
      <>
        <h1 className='mb-4'>{ user.first_name }'s Assignments</h1>
        <p>No assignments :(</p>
      </>
    )
  } else {
    return (
      <>
        <h1 className='mb-4'>{ user.first_name }'s Assignments</h1>
        { assignments }
      </>
    )
  }
}
