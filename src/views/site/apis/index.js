import Axios from '@/assets/js/AxiosPlugin'

let listUrl = '/api/site/listByPage'

export const siteList = data => {
  return Axios.post(listUrl, data).then(res => res.data)
}