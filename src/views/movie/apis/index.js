import Axios from '@/assets/js/AxiosPlugin'

let listUrl = '/api/movie/listByPage'

export const movieList = data => {
  return Axios.post(listUrl, data).then(res => res.data)
}