import request from './request'

export const getAllAssignments = ({ user, assignment }) => {
  const path = `/api/users/assignments`
  const options = { body: assignment, method: 'GET' }
  return request(path, options)
}

export const createAssignment = ({ user, assignment }) => {
  const path = `/api/users/${user._id}/assignments`
  const options = { body: assignment, method: 'POST' }
  return request(path, options)
}

export const destroyAssignment = ({ user, assignment }) => {
  const path = `/api/users/${user._id}/assignments/${assignment._id}`
  const options = { method: 'DELETE' }
  return request(path, options)
}

export const editAssignment = ({ user, assignment }) => {
  const path = `/api/users/${user._id}/assignments/${assignment._id}`
  const options = { body: assignment, method: 'PUT' }
  return request(path, options)
}