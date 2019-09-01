import React from 'react'
import Form from './Form'

export default ({ onSubmit, assignment, errorMessage }) => (
  <section className='container'>
    <h1>Edit Your Assignment</h1>
    <hr />
    <Form assignment={assignment} onSubmit={onSubmit} errorMessage={errorMessage}/>
  </section>
)
