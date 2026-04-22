<div align="center">

# 🧪 edu-lab-designer

**数智实验室方案设计引擎**

基于 Kolb 体验式学习模型，为高校任意学科设计 AI/AR/VR 沉浸式教学实验室方案

输入「学科 + 学校 + 地区」→ 输出完整三套交付物（27 个文件）

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Made with Claude](https://img.shields.io/badge/Made%20with-Claude%20Code-blueviolet)](https://claude.ai/code)

[English](README_EN.md) | 中文

</div>

---

## ✨ 这是什么

`edu-lab-designer` 是一个 **Claude Code Skill**——一套可复用的方法论和模板体系，帮助你在一次对话中为任何高校学科设计完整的数智实验室方案。

```
输入                              输出
┌──────────────────┐           ┌─────────────────────────────────┐
│ 学科：医学         │           │ ① PPT 概念方案（7 文件）         │
│ 学校：XX大学       │    →→→    │ ② 建设方案（7 文件）             │
│ 地区：云南昆明     │           │ ③ 典型场景设计（13 文件）         │
│ 课程：临床伦理学   │           │                                 │
└──────────────────┘           └─────────────────────────────────┘
                                    共 27 个文件，一键生成
```

### 🎯 核心创新

| 创新点 | 说明 |
|--------|------|
| 🎭 **LARP + 推演配对** | 先用剧本杀沉浸课建立情感记忆，再用推演课做理性判断 |
| 🧠 **Kolb 体验式学习** | 完整四阶段闭环：具体体验 → 反思观察 → 抽象概念化 → 主动实践 |
| 🤖 **AI 全流程驱动** | AI NPC、AI 追问官、AI 推演引擎、AI 个性化反思提示 |
| 🌍 **任意学科适配** | 通用四维度分析框架，医学/法学/工学/农学/商学/教育学/理学/艺术...全覆盖 |
| 📍 **本地特色融入** | 自动搜索学校+地区+学科的交叉故事，每个方案都有地方灵魂 |

---

## 🏗️ 项目结构

```
edu-lab-designer/
│
├── 📄 SKILL.md                          ← 🧠 主工作流（6阶段 + 质量清单）
│
├── 📁 scripts/
│   └── 🔧 research-prompt-gen.js        ← 调研查询生成器
│
└── 📁 references/                       ← 📚 完整方法论库（12 个文件）
    ├── 🎯 discipline-adapter.md          ← 通用学科适配（核心）
    ├── 🔄 kolb-model.md                  ← Kolb 模型适配
    │
    ├── 🎭 larp-template.md               ← LARP 5幕剧本模板
    ├── ⚖️ deduction-template.md          ← 推演 7步脚本模板
    ├── 👤 role-card-design.md            ← 角色卡设计方法论
    │
    ├── 📖 teaching-points.md             ← 教学点提取方法论
    ├── 💻 tech-mapping.md               ← AI/AR/VR 技术映射
    ├── 🎨 visual-assets.md              ← 视觉素材生成指南
    ├── 🔍 research-guide.md             ← 网络调研策略
    │
    ├── 📊 ppt-deliverables.md            ← PPT 方案 7 文件模板
    ├── 📋 proposal-deliverables.md       ← 建设方案 7 文件模板
    └── 🎬 scenario-deliverables.md       ← 典型场景 13 文件模板
```

---

## 🚀 快速开始

### 前置要求

- [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) 已安装
- 一个 Anthropic API Key

### 安装

```bash
# 方式一：Clone 到 Claude Code Skills 目录
git clone https://github.com/circleone1980/edu-lab-designer.git ~/.claude/skills/edu-lab-designer

# 方式二：Clone 到任意位置，然后软链接
git clone https://github.com/circleone1980/edu-lab-designer.git ~/projects/edu-lab-designer
ln -s ~/projects/edu-lab-designer ~/.claude/skills/edu-lab-designer
```

### 使用

在 Claude Code 中输入任意触发词即可启动：

```
> 帮我设计一个数智医学实验室方案
> 我要做一个法学沉浸式教学实验室
> 设计一套农学虚拟仿真实验项目
```

Skill 会自动识别并进入 **Phase 0 需求收集**，引导你填写：

```
━━━ 数智实验室方案设计 · 需求输入表 ━━━

【必填项】
□ 学科领域：医学
□ 学校名称：昆明医科大学
□ 所在地区：云南昆明
□ 目标课程：医学伦理学
□ 课程受众：临床医学大三学生
□ 预期场景数量：4对

【可选项 — 影响生成质量】
□ 学校/学院特色：__________
□ 地方历史文化亮点：__________
...
```

确认后进入 6 阶段交互式工作流。

---

## 📐 工作流详解

### 6 个阶段

```
Phase 0          Phase 1          Phase 2          Phase 3          Phase 4          Phase 5
需求收集    →    调研发现    →    课程架构    →    场景创建    →    教学点提取  →    方案生成
                 🔍               🔄               🎭               📖               📦
               网络搜索         Kolb适配        LARP+推演        双线提取        27个文件
               6个维度         16周排布         每对确认         理论映射        三套交付
```

| 阶段 | 产出 | 参考文件 |
|------|------|---------|
| **Phase 0** 需求收集 | 结构化输入表单 | `SKILL.md` |
| **Phase 1** 调研发现 | 调研报告（6维度） | `research-guide.md` · `research-prompt-gen.js` |
| **Phase 2** 课程架构 | Kolb适配 + 学期排布 | `kolb-model.md` · `discipline-adapter.md` |
| **Phase 3** 场景创建 | LARP剧本 + 推演脚本 | `larp-template.md` · `deduction-template.md` · `role-card-design.md` |
| **Phase 3.5** 视觉素材 | 场景图 + 角色肖像 | `visual-assets.md` |
| **Phase 4** 教学点提取 | 理论映射 + AI反思提示 | `teaching-points.md` |
| **Phase 5** 方案生成 | 三套交付物（27文件） | `ppt-deliverables.md` · `proposal-deliverables.md` · `scenario-deliverables.md` |

### 交互模式

```
┌───────────────────────────────────────────────────────┐
│  模式 A：交互式（默认）                                 │
│  每个 Phase 输出后暂停 → 用户审查修改 → 确认才进入下一步  │
│                                                       │
│  模式 B：全自动（成熟后）                                │
│  Phase 0 确认后 → 一键执行 Phase 1-5 → 全套 27 文件     │
└───────────────────────────────────────────────────────┘
```

---

## 🗺️ 文件依赖关系图

```
                          SKILL.md（主工作流）
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
     ┌────────────┐   ┌────────────┐   ┌────────────┐
     │ Phase 0-1  │   │ Phase 2-3  │   │ Phase 4-5  │
     │ 调研层     │   │ 设计层     │   │ 产出层     │
     └─────┬──────┘   └─────┬──────┘   └─────┬──────┘
           │                │                │
     ┌─────┴──────┐   ┌─────┴──────┐   ┌─────┴──────────┐
     │research-   │   │kolb-model  │   │teaching-       │
     │guide.md    │   │discipline- │   │points.md       │
     │research-   │   │adapter.md  │   │                │
     │prompt-gen  │   │            │   │                │
     │.js         │   │larp-       │   ├────────────────┤
     └────────────┘   │template.md │   │ppt-            │
                      │deduction-  │   │deliverables.md │
                      │template.md │   │proposal-       │
                      │role-card-  │   │deliverables.md │
                      │design.md   │   │scenario-       │
                      │scenario-   │   │deliverables.md │
                      │deliverables│   │tech-mapping.md │
                      │.md         │   │visual-assets.md│
                      └────────────┘   └────────────────┘
```

---

## 🎭 核心方法论：LARP + 推演配对

### LARP 沉浸课（5幕 · ~70分钟）

```
第0步: 准备(5min)          📋 角色卡分发 + 开场动画
  │
第1幕: 引入(15min)         🌅 建立角色立场 + 第一波线索
  │
第2幕: 冲突(20min)         ⚡ 矛盾升级 + AI NPC 深度互动 + 第二波线索
  │
第3幕: 抉择(10min)         🎯 高潮三选一 + AI 个性化内心独白 + 真相揭示
  │
第4幕: 跨越时空的信(10min)  ✉️ 角色给未来写信 + AI 回应
  │
第5幕: 复盘(10min)         📊 理论映射表 + 主题讨论 + 教学报告
```

### 推演课（7步 · ~55分钟）

```
第0步: 情境导入(5min)      🔗 引用上堂 LARP 经历，切换到决策者视角
  │
第1步: 信息收集(10min)     📚 三视角资料包（A方 / B方 / 第三方）
  │
第2步: 投票(5min)          🗳️ 匿名投票 + 同步揭晓
  │
第3步: 论证(10min)         🗣️ AI 追问官（4种策略轮换）
  │
第4步: 修正(5min)          🔄 立场修正 + 变化对比
  │
第5步: AI 后果推演(10min)  🔮 短/中/长期后果 + 理论对照
  │
第6步: 真相揭示(5min)      📜 历史真相 + 核心数据
  │
第7步: 复盘(10min)         💡 理论映射 + 反思日记 + 配对对比
```

### 为什么先 LARP 后推演？

| 顺序 | 效果 |
|------|------|
| 先 LARP → 后推演 ✅ | 学生带着情感记忆做理性分析，判断更深刻 |
| 先推演 → 后 LARP ❌ | 推演课缺少情感基础，判断流于表面 |

---

## 🌍 学科适配示例

| 学科 | LARP 场景示例 | 推演场景示例 | 核心冲突 |
|------|-------------|------------|---------|
| 🏥 医学 | 有限呼吸机分配 | 医院资源分配政策 | 伦理 vs 效率 |
| ⚖️ 法学 | 疑罪从无的法庭 | 司法改革决策 | 公平 vs 安全 |
| 🏗️ 工学 | 桥梁安全隐患 | 停工 vs 赶工决策 | 安全 vs 效率 |
| 🌾 农学 | 新品种推广信任危机 | 转基因政策辩论 | 传承 vs 创新 |
| 💼 商学 | 商业贿赂两难 | 企业社会责任决策 | 利润 vs 伦理 |
| 📚 教育学 | 校园霸凌干预 | 教育政策选择 | 公平 vs 发展 |
| 🔬 理学 | 科研数据造假 | 学术伦理委员会 | 创新 vs 诚信 |
| 🎨 艺术学 | 艺术审查与表达 | 文化政策制定 | 创新 vs 传承 |

---

## 🔧 脚本工具

### research-prompt-gen.js

根据学科+学校+地区自动生成三轮调研搜索查询：

```bash
node scripts/research-prompt-gen.js \
  --school "昆明医科大学" \
  --discipline "医学" \
  --region "昆明"
```

输出示例：
```
━━━ 昆明医科大学 · 医学 · 昆明 调研搜索查询 ━━━

第一轮：宏观扫描
  1. 昆明医科大学 发展历程 特色
  2. 昆明 历史 文化 特色
  3. 医学 教学 痛点 改革

第二轮：深度挖掘
  1. 昆明医科大学 医学 学院 发展历程
  2. 昆明 临床 历史事件 人物
  ...

第三轮：交叉验证
  1. 昆明医科大学 昆明 临床 故事
  ...
```

支持 9 个学科的关键词映射，也可自动使用通用学科名。

---

## 📦 三套交付物详解

### ① PPT 概念方案（7 文件）

```
①-PPT概念方案/
├── 00-方案源文档.md          📄 ~500行原始材料/知识库
├── 01-PPT逐页大纲.md         📋 16页骨架
├── 02-PPT逐页详细描述.md     📐 每页4部分：目标/文案/视觉/演讲提示
├── 03-风格一致性约束.md      🎨 10部分品牌指南
├── 04-PPT生成提示词.md       🤖 3层AI PPT生成策略
├── 05-逐页讲解稿.md          🎤 朗读版演讲稿
└── 06-现场汇报强化稿.md      💪 实战版演讲稿
```

16页叙事弧线：`封面 → 为什么做 → 需求 → 组织逻辑 → 方向一 → 方向二 → 方向三 → 综合 → 架构 → 空间 → 实施 → 预算 → 成果`

### ② 建设方案（7 文件）

```
②-建设方案/
├── 08-整体建设详细方案.md    📊 13章，每章含"五维价值"
├── 09-报价方案.md            💰 6建设包（A-F）+ 范围边界三张表
├── 10-内部对照底稿.md        🔒 内部执行对照
├── 11-建设方案完整版.md      📑 11章 + Mermaid + 效果图
├── 12-效果图脚本与提示词.md  🖼️ 统一风格 + 逐张提示词
├── 13-建设方案正式版.md      ✅ 最终整合版
└── 14-执行计划.md            📅 任务追踪（Context→操作→验证）
```

### ③ 典型场景设计（13 文件）

```
③-典型场景/
├── 配对课程设计方案.md        🔄 Kolb模型 + 配对逻辑 + 学期排布
├── [LARP系列名]/
│   ├── 00-公共设计/
│   │   └── 物理场景总述.md    🏫 共享物理场景
│   └── 场景1-4/
│       └── 剧本设计.md        🎭 完整5幕LARP剧本（~400行）
└── [推演系列名]/
    ├── 00-公共设计/
    │   └── 推演机制总述.md    ⚖️ 共享7步推演机制
    └── 场景1-4/
        └── 推演设计.md        📊 完整7步推演脚本（~350行）
```

---

## 🛤️ 路线图

| 阶段 | 状态 | 说明 |
|------|------|------|
| EP-1 结构化输入 | ✅ 已完成 | Phase 0 需求表单 |
| EP-2 Web 搜索调研 | ✅ 已完成 | 三轮搜索策略 |
| EP-3 文本剧本生成 | ✅ 已完成 | LARP + 推演完整模板 |
| EP-4 通用角色设计 | ✅ 已完成 | 跨学科角色原型方法论 |
| EP-5 视觉素材生成 | ✅ 已完成 | Gemini 提示词模板 |
| EP-6 教学点提取 | ✅ 已完成 | 双线提取 + 理论映射 |
| EP-7 Markdown 方案 | ✅ 已完成 | 三套交付物模板 |
| EP-8 项目记忆 | 🔜 计划中 | 从历史项目学习偏好和风格 |
| EP-9 全自动模式 | 🔜 计划中 | 一键输出全套 27 个文件 |

---

## 🤝 贡献

我们欢迎各种形式的贡献！

### 贡献方式

- 🐛 **报告 Bug** — [提交 Issue](https://github.com/circleone1980/edu-lab-designer/issues/new)
- 💡 **功能建议** — [提交 Issue](https://github.com/circleone1980/edu-lab-designer/issues/new) 并打上 `enhancement` 标签
- 📝 **补充学科适配** — 为你的学科添加角色原型、场景案例
- 🔧 **改进模板** — 优化现有模板的质量和完整性
- 🌐 **翻译** — 帮助改进英文文档

### 开发流程

```bash
# 1. Fork & Clone
git clone https://github.com/YOUR_USERNAME/edu-lab-designer.git

# 2. 创建分支
git checkout -b feature/your-feature

# 3. 修改 & 测试
#    - 检查 Markdown 格式
#    - 如果修改了 JS 脚本：node -c scripts/research-prompt-gen.js

# 4. 提交 & 推送
git commit -m "feat: add XX discipline role prototypes"
git push origin feature/your-feature

# 5. 创建 PR
```

### 新增学科适配模板

如果你想为某个学科贡献适配模板：

1. 在 `references/` 下创建 `discipline-[学科名].md`
2. 包含：体验场景、核心冲突、知识形态、价值方向、3-4个LARP主题建议
3. 参照 `references/discipline-adapter.md` 的格式
4. 提交 PR

---

## ❓ 常见问题

### Q: 我不是 Claude Code 用户，能用这个项目吗？

**可以。** 所有文件都是 Markdown 格式，本身就是完整的方法论文档。你可以：
- 直接阅读 `references/` 下的模板，手动按流程设计
- 用 ChatGPT / Gemini 等任何 AI 工具配合模板使用
- 将模板复制到你喜欢的 AI 工具中

### Q: 支持哪些学科？

**所有学科。** 项目采用通用四维度分析框架（体验场景/核心冲突/知识形态/价值方向），可以适配任意学科。`references/discipline-adapter.md` 提供了完整的适配方法论。

### Q: 我可以只使用部分功能吗？

**当然可以。** 比如你只需要 LARP 剧本模板，直接使用 `references/larp-template.md` 即可。各文件之间尽量解耦。

### Q: 输出的 27 个文件是什么格式？

Markdown（`.md`）。这是 AI 生成内容的最佳格式，后续可转换为 Word、PPT、PDF 等任何格式。

### Q: 和 `edu-ai-lab-proposal` 有什么关系？

`edu-ai-lab-proposal` 是早期版本（针对大理大学思政实验室的单次项目）。`edu-lab-designer` 是完整重构版——通用化、模板化、开源化。

---

## 📄 许可证

[MIT License](LICENSE) — 自由使用、修改、分发。

---

## 🙏 致谢

- **Kolb 体验式学习模型** — David A. Kolb
- **大理大学数智思政实验室项目** — 本项目的实战来源和验证场景
- **Claude Code** — Skill 运行平台
- **Gemini** — 视觉素材生成

---

<div align="center">

**如果这个项目对你有帮助，请给个 ⭐ Star！**

[报告 Bug](https://github.com/circleone1980/edu-lab-designer/issues) · [功能建议](https://github.com/circleone1980/edu-lab-designer/issues) · [贡献代码](CONTRIBUTING.md)

</div>
