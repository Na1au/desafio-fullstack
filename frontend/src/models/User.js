export default class User {
  constructor({ name, email } = {}) {
    this.name = name ?? "";
    this.email = email ?? "";
  }

  static toUser(data) {
    return new User({ ...data });
  }
}
