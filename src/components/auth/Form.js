import React from 'react'
import { withRouter } from 'react-router'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange ({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.state)
      .then(() => this.props.history.push('/users'))
      //prevent text from clearing out
      .catch((err) => console.log(err))
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address (required)</label>
          <input
            placeholder='Ex. youremail@gmail.com'
            className='form-control'
            id='email'
            onChange={this.handleChange}
            name='email'
            type='email'
            required
            value={this.state.email}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password (required)</label>
          <input
            placeholder='minimum of 8 characters'
            className='form-control'
            id='password'
            onChange={this.handleChange}
            name='password'
            type='password'
            required
            value={this.state.password} 
          />
        </div>
        {(this.props.location.pathname === '/signup') && 
          <>
            <div className='form-group'>
              <label htmlFor='first_name'>First Name (required)</label>
              <input
                placeholder='Ex. Jane'
                className='form-control'
                id='first_name'
                onChange={this.handleChange}
                name='first_name'
                type='text'
                required
                value={this.state.first_name} 
              />
            </div>
            <div className='form-group'>
              <label htmlFor='last_name'>Last Name (required)</label>
              <input
                placeholder='Ex. Doe'
                className='form-control'
                id='last_name'
                onChange={this.handleChange}
                name='last_name'
                type='text'
                required
                value={this.state.last_name} 
                />
            </div>
          </>
        }
        
        <button type='submit' className='btn btn-primary'>Submit</button>

        <span className='error-message'>{this.props.errorMessage}</span>
      </form>
    )
  }
}
 
export default withRouter(Form)
