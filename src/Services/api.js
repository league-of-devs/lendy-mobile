import Axios from 'axios'
import store from '../Store'

const getAPI = () => {
  const auth_token = store.getState().user.token

  console.log('AUTH TOKEN', auth_token)

  const api = Axios.create({
    baseURL: 'https://lendy-api.devdavi.com.br',
    headers: {
      'Authorization': auth_token
    }
  })

  return api
}

export default getAPI