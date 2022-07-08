import request from '../utils/request';

export const getDictData = query => {
    return request({
        url: '/dictInfo',
        method: 'get',
        params: query
    });
};

export const getDictDetailData = query => {
    return request({
        url: '/dictDetailInfo',
        method: 'get',
        params: query
    });
};
