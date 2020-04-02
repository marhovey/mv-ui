export default {
  themeConfig: {},
  base: '/test-docz',
  codeSandbox: false,
  typescript: true,
  propsParser: true,
  filterComponents: files => files.filter(p => p.match(/ts[x]?$/))
}