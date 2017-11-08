const webpack = require('webpack');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'dev';

module.exports = {
    entry: [
        'babel-polyfill', './frontend/entry.js'
    ],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                include: includeLocations(),
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader"   },
                    { loader: "less-loader"  }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|otf)$/,
                include: includeLocations(),
                use: [{
                    loader: "url-loader"
                }]
            },
            {
                test: [/\.jsx?$/, /\.js$/],
                include: includeLocations(),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            'transform-runtime'
                        ]
                    }
                }]
            }
        ]
    },
    watch: NODE_ENV === 'dev',
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({ NODE_ENV: JSON.stringify(NODE_ENV) }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true
        })
    ],

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    },

    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    }
};

function includeLocations() {
    return [
        path.resolve(__dirname, "frontend")
    ]
}

if (NODE_ENV === 'production') {
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
                unsafe : true
            }
        })
    );
}