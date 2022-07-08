import axios from "axios";

function httpRequest(url, data,method) {
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: url,
            data: data,
        }).then(res=>{
            resolve(res);
        }).catch(res=>{
            reject(res);
        })
    })
}

function params(url,data) {
    let values = Object.values(data);
    let keys = Object.keys(data);
    let params = '?'
    keys.forEach((f,index)=>{
        params = params+f+'='+values[index]+'&'
    })
    params = params.substring(0, params.length - 1);
    url = url+params
    return url;
}

function _get(url,data) {

    return httpRequest(params(url,data), {}, 'GET');
}

function _post(url,data) {
    return httpRequest(url,data, 'POST');
}

function _put(url,data) {
    return httpRequest(url,data, 'PUT');
}

function _delete(url,data) {
    return httpRequest(url,data, 'DELETE');
}

export default {
    getAction: _get,
    postAction: _post,
    putAction: _put,
    deleteAction: _delete,
}
