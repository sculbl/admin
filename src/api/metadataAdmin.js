import http from 'http'
import { url } from '../config'

const baseUrl = url.hwlBaseUrl;
// 元数据管理
export const _getMetaData = data => http.$POST(`${baseUrl}/metaData/getMetaData`, data)
export const _postExecuteList = id => http.$GET(`${baseUrl}/metaData/executeData/${id}`)
export const _putMetaData = data => http.$POST(`${baseUrl}/metaData/addMetaData`, data)