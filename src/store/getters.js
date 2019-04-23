const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  permission_routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes,
  routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,

  scrollY: state => state.global.scrollY
}
export default getters
