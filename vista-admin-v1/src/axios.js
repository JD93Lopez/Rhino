import axios from 'axios'

const apiPrueba = async (apiUrl) => {
    const res = await axios.get(apiUrl)
    console.log(res)
}

export default {apiPrueba}