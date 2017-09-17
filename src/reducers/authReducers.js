export default function (state = { session: null }, action) {
  switch (action.type) {
    case 'SET_SESSION':
      console.log('setting session', action.payload)
      state.session = action.payload
      return Object.assign({}, state)
    case 'DESTROY_SESSION':
      return state
    default:
      return state
  }
}