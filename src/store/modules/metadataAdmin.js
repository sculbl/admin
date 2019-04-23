import {
    _postExecuteList,
    _getMetaData,
    _putMetaData
} from '@/api/metadataAdmin'

const actions = {
    async fetchExecute (config, id) { // 执行元数据
        let res = await _postExecuteList(id)
        return res
    },
    async fetchMetaData (config, params) { // 获取元素列表
        let res = await _getMetaData(params)
        return res
    },
    async fetchModifyMetaData (config, params) { // 编辑或新增元数据 
        let res = await _putMetaData(params)
        return res
    }
}

export default {
    namespaced: true,
    actions
}