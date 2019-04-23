import axios from 'axios'
import { url } from '../config'
import { Message, Loading } from 'element-ui'
import httpRequestList from './clearHttp'
import MD5 from 'md5'

const http = axios.create({
    baseURL: url.baseUrl,
    timeout: 5000,
    headers: {}
})

let load;

http.interceptors.request.use(config => {
    // if ('' === token) config.headers.token = '';
    load = Loading.service({
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    return config;
}, error => {
    Promise.resolve(error);
    load.close();
})

http.interceptors.response.use(response => {
    load.close();
    const msg = response.config._msg;
    if (!response.data.status) {
        switch (response.data.code) {
            case -404:
                return Message.error(response.data.message || '未知异常')
            case -500:
                return Message.error('服务器连接错误！')
            default:
                return Message.error(response.data.message || '未知异常')
        }
    }

    if (msg) {
        Message.success({
            showClose: true,
            message: response.data.message || msg,
            type: 'success'
        })
    }
    return response.data
}, error => {
    Promise.reject(error);
    load.close();
});

export default {
    $GET(url, params, config = {}) {
        const CancelToken = axios.CancelToken;
        return http.get(url, {
            params: params,
            ...config,
            cancelToken: new CancelToken(function executor(c) {
                setClearFnName(url, c)
            })
        })
    },

    $POST(url, params, config) {
        const CancelToken = axios.CancelToken;
        return http.post(url, params, {
            ...config,
            cancelToken: new CancelToken(function executor(c) {
                setClearFnName(url, c)
            })
        },
        )
    },

    $DELETE(url, params, config) {
        const CancelToken = axios.CancelToken;
        return http.delete(url, {
            data: params, ...config, cancelToken: new CancelToken(function executor(c) {
                setClearFnName(url, c)
            })
        })
    },

    $PUT(url, params, config) {
        const CancelToken = axios.CancelToken;
        return http.put(url, params, {
            ...config,
            cancelToken: new CancelToken(function executor(c) {
                setClearFnName(url, c)
            })
        })
    }
}


function setClearFnName(url, c) {
    let clearFn = {};
    clearFn[MD5(url)] = c;

    httpRequestList.push(clearFn)
}
