//https://www.npmjs.com/package/gulp-bundle-assets
module.exports = {
    bundle: {
        customs: {
            scripts: [
                './content/js/data/currencies.js',
                './content/js/customs/app.js'
            ],
            options: {
                rev: false // {(boolean|string|Array)}
            }
        }
    },
};
