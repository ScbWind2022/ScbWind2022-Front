import { authorization } from './store'

export const authUser = (value) => (dispatch) => {
  dispatch(authorization(value))
}
