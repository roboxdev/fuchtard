module.exports = {
    // parser: 'sugarss',
    plugins: {
        'postcss-import': {
            root: __dirname,
        },
        'postcss-mixins': {},
        'postcss-each': {},
        'postcss-cssnext': {}
    },
};