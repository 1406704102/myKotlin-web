import request from '../utils/request';

export const getUserData = query => {
    return request({
        url: '/userInfo',
        method: 'get',
        params: query
    });
};

export const loginApi = data => {
    console.log(data)
    return request({
        url: '/userInfo/getToken',
        method: 'post',
        data
    });
};
