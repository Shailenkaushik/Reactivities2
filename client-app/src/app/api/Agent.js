import axios from 'axios';

const sleep=(delay)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,delay);
    })
}

axios.defaults.baseURL = 'http://localhost:5000/test';


axios.interceptors.response.use(async response=>{
   return sleep(1000).then(()=>{
        return response;
    }).catch((error)=>{
        console.log(error);
        return Promise.reject(error);
    })
})

const responseBody = (response) => response.data;
const requests = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    del: (url) => axios.delete(url).then(responseBody),
}

const Activities = {
    list: () => requests.get('/GetUsers'), // Corrected URL
    details:(id)=>requests.get(`/GetSingleUsers/${id}`),
    upsert:(activity)=>axios.put('/Upsert',activity),
    delete:(id)=>axios.delete(`/DeleteUsers/${id}`)
}

const agent = {
    Activities
}

export default agent;
