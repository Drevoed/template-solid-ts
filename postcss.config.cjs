const pxToRem = require('postcss-pxtorem');

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    plugins: {
        '@csstools/postcss-oklab-function': { preserve: true },
        'postcss-pxtorem': {
            rootValue: 16,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
        },
    },
};
