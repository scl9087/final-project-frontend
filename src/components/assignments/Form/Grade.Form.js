import React from 'react'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    const { assignment = {} } = this.props
    const { score = '', points_possible = '' } = assignment
    this.state = { score, points_possible }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange ({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  handleSubmit (e) {
    e.preventDefault()
    const { assignment } = this.props

    if (assignment && assignment._id) {
      const body = Object.assign({}, this.state, { _id: assignment._id })
      this.props.onSubmit(body)
    } else {
      this.props.onSubmit(this.state)
    }
  }

  render () {
    return (
      <form className='grade' onSubmit={this.handleSubmit}>
        <div className='grade'>
          <input
            className='form-control'
            id='score'
            onChange={this.handleChange}
            name='score'
            type='text'
            value={this.state.score} />
        </div>
        <span>out of</span>
        <div className='grade'>
          <input
            className='form-control'
            id='points_possible'
            onChange={this.handleChange}
            name='points_possible'
            type='text'
            value={this.state.points_possible} />
        </div>
        <button type='submit' className='btn btn-primary'>Save</button>
      </form>
    )
  }
}