## 依赖

> [React](https://reactjs.org/) + [TS](https://www.typescriptlang.org/) + [Emotion](https://emotion.sh/)

## 本地开发

```bash
$ npm install && npm start
```

打开浏览器访问 http://localhost:3000

## 目录结构

```markdown
.
├── README.md
├── package-lock.json
├── package.json
├── .cracorc.js `(craco 配置文件 - 无需使用 "eject" 也可定义 create-react-app 项目下 Webpack 配置)`
├── .eslintrc.js `(eslint 配置文件 - 使用 Standard 规范)`
├── .prettierrc.js `(prettier 配置文件)`
├── public `(静态资源目录)`
├── src
│   ├── App.tsx `(应用入口 - 在这里进行路由鉴权、Context 注入等)`
│   ├── components `(自定义组件)`
│   ├── hooks `(自定义 Hook)`
│   ├── images `(图片资源)`
│   ├── index.css `(全局样式文件)`
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── routes.ts `(页面路由表 - 代码分割使用 React.lazy 导入组件)`
│   ├── setupTests.ts
│   ├── utils `(自定义函数、常量、封装 axios 请求...)`
│   └── views `(页面组件)`
└── tsconfig.json
```

## 代码规范

**提交代码时将使用 [husky](https://typicode.github.io/husky/) 工具进行 eslint + prettier 格式化**

- React Components (自定义组件) - 首字母大写+驼峰
- Custom Hooks (自定义 Hook) - 遵循 React 官方规范
- 变量、常量使用首字母小写+驼峰

## 提交代码

项目中依赖 [Commitlint](https://commitlint.js.org/) + [Gitmoji](https://gitmoji.dev/) 进行 Commit Messages 检查

- [Gitmoji Commit Message 规范](https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/commitlint-config)
- [规范引导](https://www.yuque.com/arvinxx-fe/workflow/gcm-v2)

#### 格式

```markdown
:gitmoji: type: message
```

##### type

- feat: 新功能
- fix: 修复问题
- docs: 修改文档
- ci: 修复 CI 构建问题
- style: 修改代码格式，不影响代码逻辑
- refactor: 重构代码，理论上不影响现有功能
- perf: 提升性能
- revert: 恢复代码
- test: 增加修改测试用例
- chore: 修改工具相关（包括但不限于文档、代码生成等）
- wip: 工作进行中

##### gitmoji

- [Gitmoji 参考手册](https://gitmoji.dev/)

### 示例

```bash
$ git add .
$ git commit -m ":bug: fix: 修复一个 BUG"
```

```bash
$ git add .
$ git commit -m ":sparkles: feat: 增加一个新功能"
```
