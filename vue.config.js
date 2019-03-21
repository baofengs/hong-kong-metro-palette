module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.transformAssetUrls = {
                    audio: 'src',
                }
                return options;
            });
        config.module.rules.delete("svg");
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    loader: 'vue-svg-loader',
                }
            ]
        }
    }
};
