module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        [
            '@babel/plugin-transform-modules-commonjs', // 👉 将 ECMAScript modules 转成 CommonJS.
            {
              allowTopLevelThis: true,
              loose: true,
              lazy: true,
            },
        ],
        [
            'babel-plugin-react-css-modules',
            {
              exclude: 'node_modules',
              webpackHotModuleReloading: true,
              generateScopedName: '[name]__[local]__[hash:base64:5]',
              autoResolveMultipleImports: true,
              filetypes: {
                '.less': { syntax: 'postcss-less' },
              },
            },
          ],
    ]
}