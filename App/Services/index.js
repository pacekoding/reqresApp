import axios from 'axios'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'dataType': 'json',
}


const xhr = async (url,data,method) => {
  const config = {
    method,
    url,
    headers,
    data
  }
  try{
    const res = await axios(config)
    return res
  }
  catch(e) {
    throw(e)
  }


}

export default xhr
