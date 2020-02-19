/* eslint-disable indent */
const INITIAL_STATE = {
  token: false
}

const user = (state = INITIAL_STATE, action) => {
  console.log('USER UPDATE', action)

  switch(action.type) {
    case 'change_user_data':
      return action.user
    default:
      return state
  }
}

export default user