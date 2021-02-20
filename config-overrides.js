/*
 * @Description: Night
 * @Date: 2021-02-04 15:10:38
 * @LastEditTime: 2021-02-04 15:10:39
 * @Version: 
 */
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = override(
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src")
  })
)