export default {
  entry: 'src/index.tsx',
  extractCSS: true,
  lessInBabelMode: true,
  cjs: 'babel',
  esm: 'babel',
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  }
}