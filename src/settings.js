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
   * @description 是否展示快捷导航
   */
  tagsView: true,

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
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
