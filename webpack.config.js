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
            },
            {
                test: [/\.jsx?$/, /\.js$/],
                loaders: ['babel'],
                include: includeLocations(),
                plugins: [
                    'transform-runtime',
                    'transform-react-remove-prop-types',
                    'transform-react-constant-elements',
                    'transform-react-inline-elements'
                ]
            }
        ]
    },
    watch: NODE_ENV == 'dev',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({ NODE_ENV: JSON.stringify(NODE_ENV) }),
        new webpack.ProvidePlugin({
            React: "react",
            ReactDOM: "react-dom",
            moment: "moment",
            NODE_ENV: NODE_ENV,
            ajax: "jquery-ajax"
        }),
        //new webpack.optimize.CommonsChunkPlugin('common', 'common.js', Infinity), //пока не целесообразно включать плагин
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
        path.resolve(__dirname, "frontend"),
        path.resolve(__dirname, "node_modules/react-cubocloud-components")
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
