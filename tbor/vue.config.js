const { defineConfig } = require('@vue/cli-service')
module.exports = {
  // Your other configuration options go here
  publicPath: process.env.NODE_ENV === 'production' ? '/tbor-policy-map/' : '/',
  outputDir: 'dist',
};
