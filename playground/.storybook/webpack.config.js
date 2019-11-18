module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: ['babel-loader', 'ts-loader'],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
