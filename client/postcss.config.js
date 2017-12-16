const reactToolBoxConfig = require('./reacttoolbox.config');

module.exports = {
    plugins: {
        'postcss-import': {
            root: __dirname,
        },
        'postcss-mixins': {},
        'postcss-each': {},
        'postcss-cssnext': {
            features: {
                customProperties: {
                    variables: reactToolBoxConfig.variables,
                },
            },
        },
    },
};
