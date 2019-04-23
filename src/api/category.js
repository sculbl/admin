import http from 'http'
import { url } from '../config'

const baseUrl = url.hwlBaseUrl;
// 元数据管理
export const _getCategoryList = id => http.$GET(`${baseUrl}/menu/selectMenu/${id}`)
export const _postUpdateMenu = data => http.$POST(`${baseUrl}/menu/addOrUpdateMenu`, data, {
    _msg: true
})
export const _deleteMenu = data => http.$POST(`${baseUrl}/menu/deleteMenu`, data, {
    _msg: true
})