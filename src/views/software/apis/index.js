import Axios from '@/assets/js/AxiosPlugin'

let listUrl = '/api/software/listByPage'

export const softwareList = data => {
  return Axios.post(listUrl, data).then(res => res.data)
}