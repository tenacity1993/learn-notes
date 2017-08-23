var path = require('path')

// var entryFiles = {

// }

module.exports = {
    entry: {
        // test: path.resolve(__dirname, 'src/pages/test/test.js'),
        todo: path.resolve(__dirname, 'src/pages/todoList/index.js')
    },
    output: {
        // 将参数解析为绝对路径
        path: path.resolve(__dirname + '/dist/'),
        // publicPath: '/dist/',
        filename: '[name].bundles.js'
    },
    module: {
        loaders: [{
            test: /\.jade$/,
            loader: 'jade',
            // exclude: // 可以使用exclude来排除一部分文件
            query: { //可以使用query来指定参数
            }
        }, {
            test: /\.(css|less)$/,
            loader: 'style!css!less'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    /**解决下面报错的问题
     * You are using the runtime-only build of Vue where the template compiler is not available. 
     * Either pre-compile the templates into render functions, or use the compiler-included build.
     */
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }

}