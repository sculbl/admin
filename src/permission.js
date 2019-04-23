import router from './routers'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login'] // 路由白名单

router.beforeEach(async(to, from, next) => {
  NProgress.start()

  const hasToken = 'token' // token
  if (hasToken) {
    if (to.path === '/login') { // 登陆状态下不允许进入登陆页面
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasRoles = store.getters.routes && store.getters.routes.length > 0
      if (hasRoles) { // 路由添加完成直接进入页面
        next()
      } else { // 添加路由
        const accessRoutes = await store.dispatch('permission/generateRoutes')
        router.addRoutes(accessRoutes)
        next({ ...to, replace: true })
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 白名单进入
      next()
      NProgress.done()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
