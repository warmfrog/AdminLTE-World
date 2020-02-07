import Axios from '@/assets/js/AxiosPlugin'

let listUrl = '/api/book/listByPage'

export const bookList = data => {
  return Axios.post(listUrl, data).then(res => res.data)
}