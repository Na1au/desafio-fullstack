export default class User {
  constructor({ user_name, user_email, uid } = {}) {
    this.user_name = user_name ?? "";
    this.user_email = user_email ?? "";
    this.uid = uid ?? "";
  }

  static toUser(data) {
    return new User({ ...data });
  }
}
