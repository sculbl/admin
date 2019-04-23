import variables from '@/styles/element-variables.scss'

export default {
  theme: variables.theme,

  /**
   * @type {boolean} true | false
   * @description 是否展示布局配置
   */
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: false,

  /**
   * @type {boolean} true | false
   * @description 是否固定header
   */
  fixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description 是否固定logo
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description 显示错误文件log
   * ['production', 'development']
   */
  errorLog: 'production'
}
