import Axios from '@/assets/js/AxiosPlugin'


let listUrl = '/api/post/listByPage'
let addUrl = '/api/post/add'
export const listPost = data => {
  return Axios.post(listUrl, data).then(res => res.data)
}

export const addPost = data => {
  return Axios.post(addUrl, data).then(res => res)
}