// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  // 解析器， Babel-ESLint - 围绕Babel解析器的包装器，使其与ESLint兼容。
  parserOptions: {
    parser: 'babel-eslint'
  },
  // env指定配置文件中的环境，browser：true是指定启用了浏览器环境
  env: {
    browser: true,
  },
  // 扩展配置文件
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 使用vue插件中essential的配置
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    // extends属性值可以省略eslint-config-软件包名称的前缀。 eg: eslint-config-standard
    'standard'
  ],
  // 配置第三方插件的地方，配置前需使用npm进行安装
  // plugins 属性值可以省略eslint-plugin-软件包名称的前缀。
  plugins: [
    'vue'
  ],
  // 添加自定义规则，
  // "off"或0- 关闭规则
  // "warn"或1- 将规则作为警告打开（不影响退出代码）
  // "error"或2- 将规则作为错误打开（触发时退出代码为1）
  rules: {
    // 在定义函数是不需要以*分割 eg： function * add() {}
    'generator-star-spacing': 'off',
    // 在开发过程中是否允许 debugger，   production上线环境下为error，不可使用
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 开发过程中是否使用控制台打印
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 在比较中，强制使用 === 和 !==
    "eqeqeq": "off",
    // 需要遵循卷曲大括号约定
    /*"curly": "error",*/
    // 强制一致使用反引号，双引号或单引号,
    // double （默认）要求尽可能使用双引号  ["error", "double"]
    // single 要求尽可能使用单引号
    // backtick 需要尽可能使用反引号
    "quotes": "off",
    // 语句后是否要分号结尾，always 需要， never 不需要  ["error", "always"]
    "semi": "off",
    // 禁止在行尾添加尾随空格
    "no-trailing-spaces": 'off',
    // 禁止未声明的变量
    'no-undef': 'off',
    // 空格缩进
    "indent": ["error", 2],
    // 是否需要驼峰命名法
    'camelcase': 'off'
  }
};
