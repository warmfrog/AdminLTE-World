import Axios from '@/assets/js/AxiosPlugin'

let listUrl = '/thunderstorm/file-info/list'

export const appList = data => {
  return Axios.post(listUrl, data).then(res => res.data)
}