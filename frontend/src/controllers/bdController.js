import { auth } from "@/firebase/index.js";
import BaseController from "./BaseController";
import axios from "axios";
import { sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";

export default class bdController extends BaseController {
  constructor() {
    super();
  }

  async createUser(user) {
    await super.create("users", user);
  }

  async getUserById(id) {
    return await super.getById("users", id).then((res) => {
      return res
    }).catch((err) => {
      return err.response.data.message
    })
  }

  editUser(name, uid) {
    super.update("users", uid, { name: name });
  }
  getCurrentUser() {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe();
        resolve(user);
      }, reject);
    });
  }

  actionCodesettings() {
    return {
      handleCodeInApp: true,
      url: `${window.location.origin}/resetPassword`,
    };
  }

  sendResetPasswordEmailLink(email) {
    sendPasswordResetEmail(auth, email, this.actionCodesettings());
  }
  async updateUserPassword(payload) {
    return await confirmPasswordReset(auth, payload.oobCode, payload.password);
  }
}
