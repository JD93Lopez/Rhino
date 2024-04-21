import axios from 'axios'

const ip = "localhost"
const port = "3501"

const api = async (apiUrl) => {
    let res
    try {
        res = await axios.get("http://"+ip+":"+port+"/api/"+apiUrl)
    } catch (error) {
        if(error.code === 'ERR_NETWORK'){
            console.log(error)
        }
    }
    return res
}

const post = async (apiUrl,object) => {
    let res
    try {
        res = await axios.post("http://"+ip+":"+port+"/api/"+apiUrl,object)
    } catch (error) {
        if(error.code === 'ERR_NETWORK'){
            console.log(error)
        }
    }
    return res
}

export default {api,post}