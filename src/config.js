// api 配置
export const url = {
    development: {
        baseUrl: '//localhost:8000/mock',
        hwlBaseUrl: '//192.168.0.106:8099/api',
        ghjBaseUrl: '//192.168.0.102:8001/api'
    },
    test: {

    },
    production: {

    }
}[process.env.NODE_ENV]


/** 首页数据概览配置
 * 
 */
export const homePanelColor = [
    {
        bg: 'linear-gradient(23deg,rgba(55,155,255,1),rgba(106,216,255,1))',
        icon: require('@/assets/images/kapian_011.png'),
        text: '数据总量',
        actions: true
    },
    {
        bg: 'linear-gradient(23deg,rgba(142,127,232,1),rgba(195,169,255,1))',
        icon: require('@/assets/images/kapian_022.png'),
        text: '异常数据总量',
        actions: true
    },
    {
        text: '数据质量',
        bg: 'rgba(255, 255, 255, 1)',
        actions: false
    },
    {
        bg: 'linear-gradient(45deg,rgba(251,125,118,1),rgba(254,195,129,1))',
        icon: require('@/assets/images/kapian_033.png'),
        text: '访问量',
        actions: true
    },
    {
        bg: 'linear-gradient(23deg,rgba(15,221,223,1),rgba(56,255,215,1))',
        icon: require('@/assets/images/kapian_044.png'),
        text: '接口调用次数',
        actions: true
    },
    {
        text: '接口错误率',
        bg: 'rgba(255, 255, 255, 1)',
        actions: false
    }
]