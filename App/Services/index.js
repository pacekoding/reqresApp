import axios from 'axios'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'dataType': 'json',
}


const xhr = async (url, method) => {
  const config = {
    method,
    url,
    headers,
  }
    const res = await axios(config)
    return res
}

export default xhr
