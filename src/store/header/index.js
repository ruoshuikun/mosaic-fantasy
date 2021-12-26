const _state = {
  modalWallet: false,
}

const userReducer = (state = _state, action = {}) => {
  switch (action.type) {
    case 'SET_MODALWALLET':
      return {  ...state, modalWallet: action.state }
    default:
      return state
  }
}

export function setLogin (state) {
  return {
    type: "SET_MODALWALLET",
    payload: state
  }
}

export default userReducer
