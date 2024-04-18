import axios from 'axios'

const ip = "localhost"
const port = "3501"

const api = async (apiUrl) => {
    let res
    try {
        res = await axios.get("http://"+ip+":"+port+"/api/"+apiUrl)
    } catch (error) {
        if(error.code === 'ERR_NETWORK'){
            //TODO mostrar error de conexión.
        }
    }
    return res
}

export default {api}