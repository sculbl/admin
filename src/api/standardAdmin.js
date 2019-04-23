import http from 'http'
import { url } from '../config'

const baseUrl = url.hwlBaseUrl;
// 规则知识
export const _getRuleList = data => http.$POST(`${baseUrl}/rule/selectRule`, data)
export const _postRuleList = data => http.$POST(`${baseUrl}/rule/addOrUpdate`, data, {
    _msg: true
})
export const _deleteRule = id => http.$POST(`${baseUrl}/rule/deleteRule/${id}`, {}, {
    _msg: true
})
export const _updateoCase = data => http.$POST(`${baseUrl}/rule/openCase`, data, {
    _msg: true
})
// 校标管理
export const _getSelectBration = data => http.$GET(`${baseUrl}/calibration/selectBration`, data)
export const _postAddOrUpdate = data => http.$POST(`${baseUrl}/calibration/addOrUpdate`, data)
export const _getSchollExcel = data => http.$GET(`${baseUrl}/calibration/export`, data)

// 基础代码
export const _getBaseCodeList = params => http.$GET(`${baseUrl}/baseCode/getAllBaseCode`, params)
export const _deleteBaseCodeList = id => http.$DELETE(`${baseUrl}/baseCode/deleteCode/${id}`, {}, {
    _msg: true
})
export const _PostBaseCodeExcel = params => http.$POST(`${baseUrl}/baseCode/import`, params, {
    _msg: true
})
export const _GETExportBaseCodeExCel = params => http.$GET(`${baseUrl}/baseCode/export`, params, {
    _msg: true
})
export const _PostAddBaseOrUpDate = params => http.$POST(`${baseUrl}/baseCode/addOrUpdate`, params, {
    _msg: true
})