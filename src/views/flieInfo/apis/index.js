import Axios from '@/assets/js/AxiosPlugin'

let listUrl = '/thunderstorm/file-info/list'
let listByPageUrl = '/thunderstorm/file-info/listByPage'

export const fileInfoList = data => {
  return Axios.post(listUrl, data).then(res => res.data)
}

export const listByPage = data => {
   return Axios.post(listByPageUrl, data).then(res => res.data)
}