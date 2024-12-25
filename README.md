# Vue Runner

[![Version](https://img.shields.io/visual-studio-marketplace/v/Bai.vue-runner)](https://marketplace.visualstudio.com/items?itemName=Bai.vue-runner)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/Bai.vue-runner)](https://marketplace.visualstudio.com/items?itemName=Bai.vue-runner)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/Bai.vue-runner)](https://marketplace.visualstudio.com/items?itemName=Bai.vue-runner)

一个轻量级的 VS Code 扩展，专为 Vue 开发者设计，提供快捷的项目启动和终止功能。

## ✨ 特性

- 🚀 一键启动 Vue 开发服务器
- 🎯 智能检测项目环境
- 💻 便捷的状态栏监控
- ⚡ 快速终止服务进程
- 🔧 支持自定义包管理器和命令

## 📦 安装

在 VS Code 扩展商店中搜索 "Vue Runner" 并安装。

## 🔨 使用方法

1. 打开包含 `package.json` 的 Vue 项目
2. 在编辑器右上角找到运行按钮（绿色）
3. 点击运行按钮启动开发服务器
4. 服务运行时，按钮会变为停止按钮（红色）
5. 点击底部状态栏可以快速打开终端查看运行状态

## ⚙️ 配置选项

在 VS Code 设置中可以自定义以下选项：

- `vueRunner.packageManager`: 选择包管理器
  - 可选值: "pnpm" | "npm" | "yarn"
  - 默认值: "pnpm"

- `vueRunner.command`: 自定义运行命令
  - 例如: "dev", "serve"
  - 默认值: "dev"

- `vueRunner.customPlayIcon`: 自定义运行按钮图标
- `vueRunner.customStopIcon`: 自定义停止按钮图标

配置示例：

## 📝 更新日志

### 0.0.10
- ✨ 添加 GitHub 仓库地址
- 📝 更新文档和配置说明

### 0.0.9
- ✨ 新增包管理器选择功能 (pnpm/npm/yarn)
- 🔧 支持自定义运行命令
- 🎨 优化按钮和状态栏显示
- 📝 完善配置文档

### 0.0.8
- 🎨 全新设计的扩展图标
- 🌈 优化按钮颜色，更直观的状态显示
- 💫 改进图标动效和视觉体验

### 0.0.7
- ✨ 优化状态栏交互体验
- 📝 改进使用文档

### 0.0.6
- 🔄 改进终端管理逻辑
- 🎯 优化状态栏显示
- ⚡ 提升运行稳定性

### 0.0.5
- ✨ 优化状态栏显示
- 🔧 改进终端管理
- 🎨 更新图标样式
- 🐛 修复激活事件

### 0.0.4
- 💡 优化任务管理
- 🔨 改进任务终止逻辑

### 0.0.3
- 🚀 改进跨平台兼容性
- 🎯 优化终端管理

### 0.0.2
- 🔄 修复状态切换问题
- ⚡ 优化性能表现

### 0.0.1
- 🎉 首次发布

## ⚙️ 系统要求

- VS Code 1.80.0+
- 项目中已安装 pnpm/npm/yarn

## 🔍 自定义图标

你可以在 [VS Code Icons](https://code.visualstudio.com/api/references/icons-in-labels#icon-listing) 中查找可用的图标ID来自定义按钮图标。

## 📄 许可

[MIT License](https://github.com/Roywhite/Vue-Runner/blob/main/LICENSE)

## 🤝 贡献

欢迎提交 [Issue](https://github.com/Roywhite/Vue-Runner/issues) 或 [Pull Request](https://github.com/Roywhite/Vue-Runner/pulls) 来帮助改进这个项目。
