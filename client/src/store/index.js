import { createStore, createLogger } from 'vuex'

import auth from './modules/auth'
import message from './modules/message'
import user from './modules/user'

const debug = import.meta.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    auth,
    message,
    user,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
