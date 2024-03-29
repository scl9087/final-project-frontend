import React from 'react'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    const { assignment = {} } = this.props
    const { title = '', description = '', project_link = '' } = assignment
    this.state = { title, description, project_link }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange ({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  handleSubmit (e) {
    e.preventDefault()
    try {
      const { assignment } = this.props

      if (assignment && assignment._id) {
        const body = Object.assign({}, this.state, { _id: assignment._id })
        this.props.onSubmit(body)
      } else {
        this.props.onSubmit(this.state)
      }
    } catch (err) {
      console.log(err)
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Assignment Title</label>
          <input
            className='form-control'
            id='title'
            onChange={this.handleChange}
            name='title'
            type='text'
            required
            value={this.state.title} />
        </div>
        <div className='form-group'>
          <label htmlFor='project_link'>Project Link</label>
          <input
            className='form-control'
            id='project_link'
            onChange={this.handleChange}
            name='project_link'
            type='text'
            required
            value={this.state.project_link} />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Project Description</label>
          <textarea
            className='form-control'
            id='description'
            onChange={this.handleChange}
            name='description'
            type='text'
            required
            value={this.state.description} />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>

        <span className='error-message'>{this.props.errorMessage}</span>
      </form>
    )
  }
}
