export default function (state = { busy: false }, action) {
  switch (action.type) {
    case 'SET_BUSY':
      console.log('setting app busy', action.busy)
      state.busy = action.busy
      return Object.assign({}, state)
    default:
      return state
  }
}