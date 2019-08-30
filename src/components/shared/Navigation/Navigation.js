import React from 'react'

import AuthenticatedLinks from './Navigation.AuthenticatedLinks'
import UnauthenticatedLinks from './Navigation.UnauthenticatedLinks'

export default ({ currentUserId, isAdmin, logoutUser }) => (
  <section className='bg-light border-bottom mb-4'>
    <div className='container'>
      { currentUserId ? (
        <AuthenticatedLinks 
            currentUserId={currentUserId} 
            isAdmin={isAdmin}
            logoutUser={logoutUser}
        />
      ) : (<UnauthenticatedLinks />) 
      }
    </div>
  </section>
)
