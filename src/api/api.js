import axios from "axios";
let host = 'http://127.0.0.1:8080';
//登录
export const login=params =>{
    return axios.post('${host}/user/login')
}