import request from '../utils/request';

export const getData = query => {
    return request({
        url: '/questionInfo',
        method: 'get',
        params: query
    });
};

export const putData = (data) => {
    return request({
        url: '/questionInfo',
        method: 'put',
        data
    });

};
export const delData = (data) => {
    return request({
        url: '/questionInfo',
        method: 'delete',
        data
    });

};
