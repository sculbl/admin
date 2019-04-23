import {
    _getCategoryList,
    _postUpdateMenu,
    _deleteMenu
} from '@/api/category'

const actions = {
    async fetchGetCategoryList (config, id = 'category') { // 获取分类
        let res = await _getCategoryList(id)
        return res
    },
    async fetchUpdataMenu (config, params) { // 修改或添加分类
        let res = await _postUpdateMenu(params)
        return res
    },
    async fetchDeleteMenu (config, params) { // 删除分类信息
        let res = await _deleteMenu(params)
        return res
    }
}

export default {
    namespaced: true,
    actions
}