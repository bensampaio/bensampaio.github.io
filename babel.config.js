module.exports = {
    plugins: [
        '@babel/plugin-syntax-dynamic-import'
    ],
    presets: [
        ['@babel/preset-env', {
            corejs: 3,
            useBuiltIns: 'usage',
        }],
        ['@babel/preset-react', {
            runtime: 'automatic'
        }],
        '@babel/preset-typescript',
    ],
};