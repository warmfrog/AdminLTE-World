import Axios from 'axios'
import config from '@/config/common.json'

let AUTH_TOKEN = 'abcdefg'

Axios.defaults.baseURL=config.host
Axios.defaults.headers.post['Content-Type']='application/json'
Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
Axios.defaults.timeout = 60000
Axios.defaults.headers['Cache-Control'] = 'no-cache'
Axios.defaults.headers['Pragma'] = 'no-cache'
Axios.defaults.headers['Expires'] = '-1'

export default Axios