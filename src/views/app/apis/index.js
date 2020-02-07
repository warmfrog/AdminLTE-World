import Axios from '@/assets/js/AxiosPlugin'

let listUrl = '/api/app/listByPage'

export const appList = data => {
  return Axios.post(listUrl, data).then(res => res.data)
}