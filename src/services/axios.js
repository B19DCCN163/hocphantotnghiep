import axios from 'axios'
import { getToken, getRefreshToken, updateToken } from './token'


const instance = axios.create({
    baseURL: "http://localhost:3001/api"
})
// instance.interceptors.request.use(
//     (config) => {
//         const token = getToken();
//         if (token) {
//             config.headers["Authorization"] = 'Bearer ' + token;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// instance.interceptors.response.use(
//     (res) => {
//         return res;
//     },
//     async (err) => {
//         const originalConfig = err.config;

//         if (originalConfig.url !== "/user/signin" && err.response) {
//             if (err.response.status === 401 && !originalConfig._retry) {
//                 originalConfig._retry = true;

//                 try {
//                     const rs = await instance.post("/user/refresh-token", {
//                         refreshToken: getRefreshToken(),
//                     });
//                     const { accessToken } = rs.data;
//                     updateToken(accessToken)
//                     return instance(originalConfig);
//                 } catch (_error) {
//                     return Promise.reject(_error);
//                 }
//             }
//         }

//         return Promise.reject(err);
//     }
// );
export default instance
