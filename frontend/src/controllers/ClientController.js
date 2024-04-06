import BaseController from "./BaseController";

export default class ClientController extends BaseController {
  constructor() {
    super();
  }

  async createClient(client) {
    await super.create("clients", client);
  }

  async getClients() {
    return await super.getAll("clients", { headers: {
      "Access-Control-Allow-Origin": "*"
    }}).then((res) => {
      return res
    }).catch((err) => {
      console.log(err)
    })
  }

  editClient(client) {
    super.update("clients", client.id, client);
  }

  deleteClient(client) {
    super.delete("clients", client)
  }
}