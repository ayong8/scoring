var webpack = require('webpack');

module.exports = {
    // webpack이 파일을 읽기 시작하는 부분
    entry: './src/index.js',

    // 합친 번들을 여기에 저장하겠다
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',  // 클라우드나 리모트서버를 사용할 경우는 0.0.0.0 (로컬호스트로 하면 안된다)
        port: 4000,       // 이용하는 서비스마다 다르게...
        contentBase: __dirname + '/public/',  // index파일의 위치
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    // 여러 플러그인... e.g., uglify
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}