import axios from "axios";

const host = '';

export default class BaseController {
  constructor() {}

  async create(route, payload) {
    return await axios.post(`${host}/${route}`, payload, {
      headers: { Authorization: localStorage.getItem('uid') },
    });
  }

  async update(route, id, payload) {
    return await axios.put(`${host}/${route}/${id}`, payload, {
      headers: { Authorization: localStorage.getItem('uid') },
    })
  }

  async getAll(route) {
    return await axios.get(`${host}/${route}`, {
      headers: { Authorization: localStorage.getItem('uid') },
    }).then((res) => {
      return res.data;
    })
  }

  async getById(route, id) {
    return await axios.get(`${host}/${route}/${id}`, {
      headers: { Authorization: localStorage.getItem('uid') },
    }).then((res) => {
      return res.data
    })
  }

  async delete(route, id) {
    return await axios.delete(`${host}/${route}/${id}`, {
      headers: { Authorization: localStorage.getItem('uid') },
    }).then((res) => {
      return res.data
    })
  }
}
