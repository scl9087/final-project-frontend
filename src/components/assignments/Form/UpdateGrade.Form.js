import React from 'react'
import Form from './Grade.Form'

export default ({ onSubmit, assignment }) => (
    <Form assignment={assignment} onSubmit={onSubmit} />
)
