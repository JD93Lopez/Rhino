import axios from 'axios'

const api = async (apiUrl) => {
    const res = await axios.get(apiUrl)
}

export default {api}