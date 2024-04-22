const FileReader = require('./FileReader.js');
const axios = require('axios')
const config = FileReader.readFetchConfig()

const ip = config.ip
const port = config.port

const api = async (apiUrl) => {
    let res
    try {
        res = await axios.get("http://"+ip+":"+port+"/dbapi/"+apiUrl)
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
        res = await axios.post("http://"+ip+":"+port+"/dbapi/"+apiUrl,object)
    } catch (error) {
        if(error.code === 'ERR_NETWORK'){
            console.log(error)
        }
    }
    return res
}

module.exports = {api,post}