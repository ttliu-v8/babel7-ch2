# babel7-ch2
@babel/core 核心<br>
@babel/cli 命令行 babel 源文件 --out-dir/-file 目标文件<br>
babel-loader@8 webpack的loader<br>

方式一：<br>
@babel/preset-env + @babel/polyfill 可以完全实现 ES 基础语法的转译 + 新 API 的转译，这是配置 Babel 转码的第一种方式。<br>
配置presets: [["@babel/preset-env",{"useBuiltIns": "usage","corejs": 2}]]<br>
关键点是：useBuiltIns<br>
可以转译语法、新 API，但存在污染全局问题


方式二:<br>
@babel/preset-env + @babel/plugin-transform-runtime 搭配使用，可以完成基本语法转译 + ES 新语法的按需加载，这是配置 Babel 转码的第二种方式。
cnpm i @babel/plugin-transform-runtime -D <br>
cnpm i @babel/runtime @babel/runtime-corejs2 -S<br>
配置插件<br>
"plugins": [
    ["@babel/plugin-transform-runtime",{"corejs": 2 // 推荐}]]<br>
可按需导入，转译语法、新 API，且避免全局污染（babel7 中@babel/polyfill 是@babel/runtime-corejs2 的别名），但是检测不到示例方法,比如：‘hello‘.includes(‘h‘)这种句法；


升级@babel/runtime-corejs3<br>
方法二升级方式：@babel/polyfill 不必再安装<br> 
cnpm i core-js regenerator-runtime -S <br>
"useBuiltIns": "entry",
"corejs": {
  "version": 3, // 使用core-js@3
  "proposals": true,
}
方法二升级方式：cnpm i @babel/runtime @babel/runtime-corejs3 -S，修改插件参数corejs：3  修复新API实例方法（比如includes等）检查不到的问题

