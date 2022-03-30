import $api from "../axios";

export default class AuthService {
  static async login(login, password) {
    return $api.post("/user/login", { login, password });
  }

  static async signup(
    login,
    password,
    repeatPassword,
    firstName,
    lastName,
    age
  ) {
    return $api.post("/user/signup", {
      login,
      password,
      repeatPassword,
      firstName,
      lastName,
      age,
    });
  }

  static async logout() {
    return $api.post("/user/logout");
  }
}
