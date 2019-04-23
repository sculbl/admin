// api 配置
export const url = {
  development: {
    baseUrl: "//localhost:8000/mock"
  },
  test: {},
  production: {}
}[process.env.NODE_ENV];

/** 这个地方方一些 页面公共的变量配置
 *
 */
