export function setSession(payload) {
  return {
    type: "SET_SESSION",
    payload: payload
  }
}

export function destorySession(payload) {
  return {
    type: "DESTROY_SESSION",
    payload: payload
  }
}