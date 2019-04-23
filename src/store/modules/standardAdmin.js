import {
    _getBaseCodeList,
    _deleteBaseCodeList,
    _PostBaseCodeExcel,
    _GETExportBaseCodeExCel,
    _getRuleList,
    _postRuleList,
    _deleteRule,
    _updateoCase,
    _getSelectBration,
    _postAddOrUpdate,
    _getSchollExcel,
    _PostAddBaseOrUpDate
} from '@/api/standardAdmin'

const actions = {
    // 基础代码
    async fetchGetBaseCodeList (config, params = {}) { // 获取基础代码列表
        let res = await _getBaseCodeList(params)
        return res
    },
    async fetchDeleteBaseCodeList (config, params) { // 删除基础代码
        let res = await _deleteBaseCodeList(params.id)
        return res
    },
    async fetchPostBaseCodeExcel (config, params) { // 上传Excel
        let res = await _PostBaseCodeExcel(params)
        return res
    },
    async fetchGetExportBaseCodeExCel (config, params) { // 导出Excel
        let res = await _GETExportBaseCodeExCel(params)
        return res
    },
     // 规则知识
     async fetchRuleList (config, params) { // 获取列表
        let res = await _getRuleList(params)
        return res
    },
    async fetchAddRule (config, params) { // 添加 或修改 规则
        let res = await _postRuleList(params)
        return res
    },
    async fetchDeleteRule (config, id) { // 删除规则
        let res = await _deleteRule(id)
        return res
    },
    async fetchUpdateCase (config, params) { //  修改大小写 以及 开关模式
        let res = await _updateoCase(params)
        return res
    },
    // 校标管理
    async fetchSelectBration (config, params) { // 获取校标管理列表
        let res = await _getSelectBration(params)
        return res
    },
    async fetchAddOrUpdate (config, params) { // 添加校标
        let res = await _postAddOrUpdate(params)
        return res
    },
    async fetchSchollExcel (config, params) { // 导出
        let res = await _getSchollExcel(params)
        return res
    },
    async AddBaseOrUpDate (config, params) { // 保存基础代码
        let res = await _PostAddBaseOrUpDate(params)
        return res
    }
    
}

export default {
    namespaced: true,
    actions
}