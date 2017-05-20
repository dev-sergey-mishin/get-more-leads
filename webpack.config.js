const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'dev';

module.exports = {
    entry: [
        './frontend/entry.js'
    ],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: "style!css!less",
                include: includeLocations()
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                include: includeLocations()
            }
        ]
    },
    watch: NODE_ENV == 'dev',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({ NODE_ENV: JSON.stringify(NODE_ENV) })
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    }
};

function includeLocations() {
    return [
        path.resolve(__dirname, "frontend")
    ]
}

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                sequences : true,
                booleans : true,
                loops : true,
                unused : true,
                warnings : false,
                drop_console : true,
                unsafe : true
            }
        })
    );
}
