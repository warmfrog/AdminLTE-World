import Axios from '@/assets/js/AxiosPlugin.js'

let albumListUrl = '/api/album/listByPage'
export const albumList = data => {
  return Axios.post(albumListUrl, data).then(res => res.data)
}