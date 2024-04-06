import axios from "axios";

const host = 'http://127.0.0.1:8000/api';

export default class BaseController {
  constructor() {}

  async create(route, payload) {
    return await axios.post(`${host}/${route}`, payload);
  }

  async update(route, id, payload) {
    return await axios.put(`${host}/${route}/${id}`, payload)
  }

  async getAll(route) {
    return await axios.get(`${host}/${route}`).then((res) => {
      return res.data;
    })
  }

  async getById(route, id) {
    return await axios.get(`${host}/${route}/${id}`).then((res) => {
      return res.data
    })
  }

  async delete(route, id) {
    return await axios.delete(`${host}/${route}/${id}`).then((res) => {
      return res.data
    })
  }
}
