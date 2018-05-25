// const { resolve } = require('path')

// module.exports = {
//   context: resolve(__dirname, 'src'),

//   entry: [
//     './index.js'
//     // the entry point of our app
//   ],
//   output: {
//     filename: 'bundle.js',
//     // the output bundle

//     path: resolve(__dirname, 'dist'),

//     publicPath: '/'
//     // necessary for HMR to know where to load the hot update chunks
//   },

//   devtool: 'inline-source-map',

//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         use: [ 'babel-loader', ],
//         exclude: /node_modules/
//       },
//     ],
//   },
//   devServer: {
//             port: 9090,
//             proxy: {
//                 '/': {
//                     target: 'http://localhost:8080',
//                     secure: false,
//                     prependPath: false
//                 }
//             },
//             publicPath: 'http://localhost:9090/',
//             historyApiFallback: true
//         },
// }

const path = require('path');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    source: path.join(__dirname, 'src'),
    output: path.join(__dirname, '../../../target/classes/static')
};

const common = {
    entry: [
        PATHS.source
    ],
    output: {
        path: PATHS.output,
        publicPath: '',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devServer: {
            port: 9090,
            proxy: {
                '/': {
                    target: 'http://localhost:8080',
                    secure: false,
                    prependPath: false
                }
            },
            publicPath: 'http://localhost:9090/',
            historyApiFallback: true
        },
        devtool: 'source-map'
    });
}

if (TARGET === 'build') {
    module.exports = merge(common, {});
}
