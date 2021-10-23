import API from './API'

export default {
  uploadFile(payload) {
    return API.post(payload.endpoint, payload.file)
  }
}
