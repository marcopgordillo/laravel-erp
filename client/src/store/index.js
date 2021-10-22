import { createStore, createLogger } from 'vuex'

import auth from './modules/auth'

const debug = import.meta.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    auth,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
