import {
    _getDataBusinessList,
    _postConnectionTest,
    _postSaveDataSource,
    _deleteDataSource,
    _getDataCenter
} from '@/api/dataSource'

const actions = {
    // 业务库
    async fetchGetBusinessList(config, params) { // 获取列表
        let res = await _getDataBusinessList(params)
        return res
    },
    async fetchPostConnectionTest(config, params) { // 测试链接
        let res = await _postConnectionTest(params)
        return res
    },
    async fetchPostSaveDataSource(config, params) { // 保存数据源
        let res = await _postSaveDataSource(params)
        return res
    },
    async fetchDeleteSource(config, params) { // 删除数据源
        let res = await _deleteDataSource(params.id)
        return res
    },
    // 中间库
    async fetchGetDataCenterList(config, params) { // 获取list
        let res = await _getDataCenter(params)
        return res
    }
}

export default {
    namespaced: true,
    actions
}