import Axios from '@/assets/js/AxiosPlugin'
let addUrl = '/api/post/add'

export const addPost = data => {
  return Axios.post(addUrl, data).then(res => res.data)
}