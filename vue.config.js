module.exports = {
    // 如果不是部署二级目录请注释
    publicPath: process.env.NODE_ENV === 'production' ? '/unituicli3' : './',
    //  是否为生产环境构建生成 source map？
    productionSourceMap: false,
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    //下面是引入cdn部分，如果你不希望引入cdn请删除或注释下面这部分
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'element-plus': 'ElementPlus',
            'vue-router': 'VueRouter',
            'axios': 'axios',
            'echarts': 'echarts',
            'CryptoJs': 'CryptoJS'
        }
    },

}
