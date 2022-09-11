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
}
