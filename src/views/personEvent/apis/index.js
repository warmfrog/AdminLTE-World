import Axios from '@/assets/js/AxiosPlugin.js'

let albumListUrl = '/api/album/listByPage'
let searchPersonEventByPageUrl = "/api/personEventInfo/v1/searchByPage"
export const albumList = data => {
  return Axios.post(albumListUrl, data).then(res => res.data)
}

export const searchPersonEventByPage = data => {
   return Axios.post(searchPersonEventByPageUrl, data).then(res => res.data)
}