import AuthReducer from './auth'
import * as auth from './auth'
import UserReducer from './user'
import * as user from './user'

const repositiories = {}
repositiories.auth = AuthReducer
repositiories.user = UserReducer

export { auth, user }
export default repositiories
