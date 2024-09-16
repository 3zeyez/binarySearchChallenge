module.exports = async () => {
    return {
      transform: {
        '^.+\\.js$': ['@babel/register', { rootMode: 'upward' }],
      },
      transformIgnorePatterns: [
        '/node_modules/',
        '\\.pnp\\.[^\\/]+$'
      ],
    };
  };