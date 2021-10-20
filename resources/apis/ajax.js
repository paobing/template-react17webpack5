import axios from "axios";
import { BaseUrl } from "./host";

//  添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent

    const token = (parent.window && parent.window.getToken) ? parent.window.getToken() : 'ccb485ff-36bb-41c4-856c-745405ed371e';

    // 判断是否存在token，如果存在的话，则每个http header都加上token
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    // config.headers['process-key'] = processKeySuffix;

    return config;
}, function (error) {
    // Do something with request error

    return Promise.reject(error);
});

axios.interceptors.response.use(function (config) {
    // Do something before request is sent
    if (config.data && config.data.status == 40301) {
        parent.window && parent.window.showLogin && parent.window.showLogin();
    }

    return config.data;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default class API {
    static getUserList(){
        return axios.get("/user/info");
    }
}
