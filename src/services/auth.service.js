import { TOKEN_NAME } from "@/configs"
import BaseService from "./base.service"

export default class AuthService extends BaseService {
  static async auth(params) {
    return new Promise((resolve, reject) => {
      this.request()
        .post("/auth", params)
        .then((res) => {
          localStorage.setItem(TOKEN_NAME, res.data.token)
          resolve(res)
        })
        .catch((error) => reject(error.response))
    })
  }

  static async getMe() {
    const token = await localStorage.getItem(TOKEN_NAME)

    if (!token) {
      return Promise.reject("Token Not Found")
    }

    return new Promise((resolve, reject) => {
      this.request({ auth: true })
        .get("/me")
        .then((response) => resolve(response.data.data))
        .catch((error) => {
          localStorage.removeItem(TOKEN_NAME)
          reject(error.response)
        })
    })
  }

  static async logout() {
    return new Promise((resolve, reject) => {
      this.request({ auth: true })
        .post("/logout")
        .then(() => {
          localStorage.removeItem(TOKEN_NAME)
          resolve("ok")
        })
        .catch((error) => reject(error.response))
    })
  }
}
