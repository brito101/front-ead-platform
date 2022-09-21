import AuthService from "@/services/auth.service"
import ResetPasswordService from "@/services/password.reset.service"

export default {
  state: {
    user: {
      name: "",
      email: "",
    },
    loggedIn: false,
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user
      state.loggedIn = true
    },
    LOGOUT(state) {
      state.user = {
        name: "",
        email: "",
      }
      state.loggedIn = false
    },
  },

  actions: {
    auth({ dispatch }, params) {
      return AuthService.auth(params).then(() => dispatch("getMe"))
    },

    forgetPassword (_, params) {
      return ResetPasswordService.forgetPassword(params)
  },
  },
}
