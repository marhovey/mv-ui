export default {
  entry: 'src/index.tsx',
  doc: {
    themeConfig: { mode: 'light' },
    base: '/mv-ui'
  },
  extractCSS: true,
  lessInBabelMode: true,
  cjs: 'babel',
  esm: 'babel',
  runtimeHelpers: true,
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  }
}