export default {
  entry: 'src/index.tsx',
  doc: {
    themeConfig: {},
    base: '/mv-ui',
    codeSandbox: false,
    typescript: true,
    propsParser: true,
    filterComponents: files => files.filter(p => p.match(/ts[x]?$/))
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