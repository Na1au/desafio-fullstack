import { auth } from "@/firebase/index.js";
import BaseController from "./BaseController";

export default class ClientController extends BaseController {
  constructor() {
    super();
  }

  async createClient(user) {
    await super.create("clients", user);
  }

  async getClientById(id) {
    return await super.getById("clients", id).then((res) => {
      return res
    }).catch((err) => {
      console.log(err)
    })
  }

  editClient(user, uid) {
    super.update("clients", uid, user);
  }
}
