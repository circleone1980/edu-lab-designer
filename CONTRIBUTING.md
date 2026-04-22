# 贡献指南 | Contributing Guide

感谢你对 edu-lab-designer 的关注！本文档帮助你快速参与贡献。

---

## 🤔 如何贡献

| 贡献类型 | 方式 |
|---------|------|
| 🐛 报告 Bug | [提交 Issue](https://github.com/circleone1980/edu-lab-designer/issues/new)，附上复现步骤 |
| 💡 功能建议 | [提交 Issue](https://github.com/circleone1980/edu-lab-designer/issues/new)，打上 `enhancement` 标签 |
| 📝 新增学科适配 | Fork → 创建 `references/discipline-[学科名].md` → PR |
| 🔧 改进模板 | Fork → 修改对应模板 → PR |
| 🌐 翻译改进 | Fork → 修改 `README_EN.md` → PR |

---

## 🔧 开发环境

本项目无需编译或安装依赖（Markdown 项目）。唯一需要 Node.js 的是：

```bash
# 验证 JS 脚本语法
node -c scripts/research-prompt-gen.js
```

---

## 📝 提交规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：

```
feat: add medical discipline role prototypes
fix: correct Kolb cycle order in template
docs: update README with installation guide
refactor: restructure LARP template sections
```

---

## 📐 新增学科适配模板

如果你想为某个学科贡献适配模板：

### 步骤

1. 在 `references/` 下创建 `discipline-[学科名].md`
2. 参照 `references/discipline-adapter.md` 的结构
3. 包含以下内容：

```markdown
# [学科名] 学科适配指南

## 1. 体验场景
- 核心场景类型：[临床/实验室/田野/工厂/法庭/社区]
- 场景中的角色：[列出5-6个典型角色]
- 典型两难抉择：[列出3-4个]

## 2. 核心冲突
- [冲突类型1]：[具体描述]
- [冲突类型2]：[具体描述]

## 3. 知识形态
- 主要形态：[理论/技能/态度/判断/创造]
- LARP 呈现方式：[如何融入剧情]
- 推演呈现方式：[如何融入论证]

## 4. 价值教育方向
- [方向1]：[具体描述]
- [方向2]：[具体描述]

## 5. LARP 主题建议
### 主题1：[名称]
- 历史原型：[事件]
- 核心冲突：[A vs B]
- 角色原型：[5个角色概要]
```

4. 提交 PR

---

## ✅ PR 检查清单

提交 PR 前请确认：

- [ ] Markdown 格式正确（无语法错误）
- [ ] 如修改了 JS 脚本，`node -c` 通过
- [ ] 新增内容与现有文件风格一致
- [ ] 如添加了新文件，更新了相关引用
- [ ] 提交信息遵循 Conventional Commits

---

## 🌿 分支策略

- `main` — 稳定版本
- `feature/*` — 新功能开发
- `fix/*` — Bug 修复
- `docs/*` — 文档更新

---

## 📜 许可证

贡献的代码将采用与项目相同的 [MIT License](LICENSE)。
