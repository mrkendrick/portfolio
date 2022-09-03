import axios, { AxiosRequestHeaders } from 'axios'

const baseURL = 'https://api.mrkendrick.dev/api'

const headers: AxiosRequestHeaders = {
  'Access-Control-Allow-Origin': true,
  'Access-Control-Allow-Credentials': 'include',
  'Content-Type': 'application/json; charset=utf-8',
}

const api = axios.create({
  baseURL,
  headers,
  timeout: 60000,
})

export default class ApiService {
  static async about() {
    return api.get('/about?populate=*')
  }

  static async skills() {
    return api.get('/skills')
  }

  static async education() {
    return api.get('/educations?populate=edu_desc')
  }

  static async experience() {
    return api.get('/experiences?populate=*')
  }

  static async proLang() {
    return api.get(
      '/programming-languages?populate[icons][populate]=*&populate[external_link]=*'
    )
  }
}
