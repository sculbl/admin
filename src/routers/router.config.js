/** 动态路由
 * 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 * 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 * 若你想不管路由下面的 children 声明的个数都显示你的根路由
 * 
 * @param {Boolean} hidden 当设置 true 的时候该路由不会再侧边栏出现  (默认 false)
 * @param {String} name 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * @param {Object} 
 * meta: {
    title: 'title' 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name' 设置该路由的图标
    breadcrumb: false 如果设置为false，则不会在breadcrumb面包屑中显示
    noredirect: false 当设置 noredirect 的时候该路由在面包屑导航中不可被点击
 * }
*/
/* Layout */
import Layout from "@/layout";
// import Blank from '@/layout/blank'

export default [
  { path: "*", redirect: "/404", hidden: true }
];