import axios from 'axios'

const api = async (apiUrl) => {
    try {
        const res = await axios.get(apiUrl)
    } catch (error) {
        if(error.code === 'ERR_NETWORK'){
            //TODO mostrar error de conexión.
        }
    }
}

export default {api}