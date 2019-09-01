import React from 'react'
import Form from './Form'

export default ({ onSubmit, errorMessage }) => (
  <section className='container'>
    <h1>Create a New Assignment</h1>
    <hr />
    <Form onSubmit={onSubmit} errorMessage={errorMessage}/>
  </section>
)
