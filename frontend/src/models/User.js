export default class User {
  constructor({ user_name, user_email } = {}) {
    this.user_name = user_name ?? "";
    this.user_email = user_email ?? "";
  }

  static toUser(data) {
    return new User({ ...data });
  }
}
