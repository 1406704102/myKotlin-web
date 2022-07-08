import axios from 'axios';

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    baseURL: 'http://192.168.123.187:8090/api/',
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        console.log(sessionStorage.getItem('PJ-Token'))
        config.headers['Content-Type'] = 'application/json'
        config.headers['PJ-Token'] = sessionStorage.getItem('PJ-Token')
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
