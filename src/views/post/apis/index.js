import Axios from 'axios'

let host ='http://localhost:9000'
let postUrl = `${host}/api/post/listByPage`
export const listPostByPage = data => {
  return Axios.post(postUrl, data).then(res => res.data)
}

export const addPost = data => {
  return Axios.post(postUrl, data).then(res => res)
}