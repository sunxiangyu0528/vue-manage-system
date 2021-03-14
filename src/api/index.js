import request from '../utils/request';
import axios from "axios";

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};
// //http request拦截器
// axios.interceptors.request.use(
//     onFulfiled:config=>{
//         const token = sessionStorage.getItem("token") || localStorage.getItem("token");
//         if (token) {
//             config.headers.Authorization=   'JWT${token}';
//
//         }
//         return config;
// },
//     onRejected:err=>{
//         return Promise.reject(err) ;
// }
// )