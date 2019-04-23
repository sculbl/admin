import http from 'http'
import { url } from '../config'

const baseUrl = url.ghjBaseUrl;
// 业务库
export const _getDataBusinessList = params => http.$POST(`${baseUrl}/dataSource/getList`, params)
export const _postConnectionTest = params => http.$POST(`${baseUrl}/dataSource/connectionTest`, params, {
    _msg: true
})
export const _postSaveDataSource = params => http.$POST(`${baseUrl}/dataSource/saveDataSource`, params, {
    _msg: true
})
export const _deleteDataSource = id => http.$GET(`${baseUrl}/dataSource/deleteDataSource/${id}`, {}, {
    _msg: true
})

// 中间库
export const _getDataCenter = params => http.$POST(`${baseUrl}/middleDataBase/getList`, params)