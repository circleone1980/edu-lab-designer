<div align="center">

# 🧪 edu-lab-designer

**Digital Intelligence Lab Design Engine**

Design AI/AR/VR immersive teaching lab proposals for any university discipline,
powered by the Kolb Experiential Learning Model.

Input "Discipline + School + Region" → Output 3 complete deliverable sets (27 files)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Made with Claude](https://img.shields.io/badge/Made%20with-Claude%20Code-blueviolet)](https://claude.ai/code)

中文 | [English](README_EN.md)

</div>

---

## ✨ What is This

`edu-lab-designer` is a **Claude Code Skill** — a reusable methodology and template system that helps you design complete digital intelligence lab proposals for any university discipline in a single conversation.

```
INPUT                             OUTPUT
┌──────────────────┐           ┌─────────────────────────────────┐
│ Discipline: Med   │           │ ① PPT Concept Proposal (7 files) │
│ School: XX Univ   │    →→→    │ ② Construction Proposal (7 files)│
│ Region: Yunnan    │           │ ③ Scenario Designs (13 files)    │
│ Course: Ethics    │           │                                  │
└──────────────────┘           └──────────────────────────────────┘
                                    27 files total
```

### 🎯 Core Innovations

| Innovation | Description |
|------------|-------------|
| 🎭 **LARP + Deduction Pairing** | Build emotional memory with immersive role-play, then apply rational judgment |
| 🧠 **Kolb Experiential Learning** | Full 4-stage cycle: Experience → Reflect → Conceptualize → Experiment |
| 🤖 **AI-Driven Throughout** | AI NPCs, AI interrogators, AI consequence simulators, AI personalized reflection |
| 🌍 **Universal Discipline Fit** | 4-dimension analysis framework covers Medicine, Law, Engineering, Agriculture, etc. |
| 📍 **Local Heritage Integration** | Auto-searches school + region + discipline intersections for authentic local stories |

---

## 🏗️ Project Structure

```
edu-lab-designer/
│
├── 📄 SKILL.md                          ← 🧠 Main workflow (6 phases + quality checklist)
│
├── 📁 scripts/
│   └── 🔧 research-prompt-gen.js        ← Research query generator
│
└── 📁 references/                       ← 📚 Complete methodology library (12 files)
    ├── 🎯 discipline-adapter.md          ← Universal discipline adaptation (core)
    ├── 🔄 kolb-model.md                  ← Kolb model adaptation
    │
    ├── 🎭 larp-template.md               ← LARP 5-act script template
    ├── ⚖️ deduction-template.md          ← Deduction 7-step script template
    ├── 👤 role-card-design.md            ← Role card design methodology
    │
    ├── 📖 teaching-points.md             ← Teaching point extraction methodology
    ├── 💻 tech-mapping.md               ← AI/AR/VR tech mapping
    ├── 🎨 visual-assets.md              ← Visual asset generation guide
    ├── 🔍 research-guide.md             ← Web research strategy
    │
    ├── 📊 ppt-deliverables.md            ← PPT proposal 7-file template
    ├── 📋 proposal-deliverables.md       ← Construction proposal 7-file template
    └── 🎬 scenario-deliverables.md       ← Scenario design 13-file template
```

---

## 🚀 Quick Start

### Prerequisites

- [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) installed
- An Anthropic API Key

### Installation

```bash
# Option 1: Clone directly into Claude Code Skills directory
git clone https://github.com/circleone1980/edu-lab-designer.git ~/.claude/skills/edu-lab-designer

# Option 2: Clone anywhere and symlink
git clone https://github.com/circleone1980/edu-lab-designer.git ~/projects/edu-lab-designer
ln -s ~/projects/edu-lab-designer ~/.claude/skills/edu-lab-designer
```

### Usage

In Claude Code, type any trigger phrase to activate:

```
> Design a digital medical lab proposal
> I need an immersive law teaching lab
> Create a virtual simulation project for agriculture
```

The Skill automatically enters **Phase 0: Requirements Collection**, guiding you through:

```
━━━ Digital Lab Design · Requirements Form ━━━

[Required]
□ Discipline: Medicine
□ School: XX Medical University
□ Region: Kunming, Yunnan
□ Target Course: Medical Ethics
□ Audience: 3rd-year clinical medicine students
□ Scenario pairs: 4

[Optional — affects output quality]
□ School/College characteristics: __________
□ Regional cultural highlights: __________
...
```

After confirmation, the 6-phase interactive workflow begins.

---

## 📐 Workflow Overview

### 6 Phases

```
Phase 0          Phase 1          Phase 2          Phase 3          Phase 4          Phase 5
Requirements →   Research    →   Curriculum  →   Scenario    →   Teaching    →   Deliverable
                  🔍               🔄               🎭               📖               📦
                Web search       Kolb fit        LARP+Deduction   Dual extraction  27 files
                6 dimensions     16-week plan     Per-pair review  Theory mapping   3 sets
```

| Phase | Output | Reference Files |
|-------|--------|----------------|
| **Phase 0** Requirements | Structured input form | `SKILL.md` |
| **Phase 1** Research | Research report (6 dimensions) | `research-guide.md` · `research-prompt-gen.js` |
| **Phase 2** Curriculum | Kolb adaptation + semester plan | `kolb-model.md` · `discipline-adapter.md` |
| **Phase 3** Scenarios | LARP scripts + Deduction scripts | `larp-template.md` · `deduction-template.md` · `role-card-design.md` |
| **Phase 3.5** Visuals | Scene images + Character portraits | `visual-assets.md` |
| **Phase 4** Teaching Points | Theory mapping + AI reflection prompts | `teaching-points.md` |
| **Phase 5** Deliverables | 3 deliverable sets (27 files) | `ppt-deliverables.md` · `proposal-deliverables.md` · `scenario-deliverables.md` |

### Interaction Modes

- **Mode A: Interactive (default)** — Pause after each phase; user reviews, modifies, and confirms before proceeding
- **Mode B: Full-auto (planned)** — After Phase 0 confirmation, execute Phase 1-5 in one pass

---

## 🗺️ File Dependency Map

```
                          SKILL.md (Main Workflow)
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
     ┌────────────┐   ┌────────────┐   ┌────────────┐
     │ Phase 0-1  │   │ Phase 2-3  │   │ Phase 4-5  │
     │ Research   │   │ Design     │   │ Output     │
     └─────┬──────┘   └─────┬──────┘   └─────┬──────┘
           │                │                │
     ┌─────┴──────┐   ┌─────┴──────┐   ┌─────┴──────────┐
     │research-   │   │kolb-model  │   │teaching-       │
     │guide.md    │   │discipline- │   │points.md       │
     │research-   │   │adapter.md  │   │                │
     │prompt-gen  │   │larp-       │   ├────────────────┤
     │.js         │   │template.md │   │ppt-            │
     └────────────┘   │deduction-  │   │deliverables.md │
                      │template.md │   │proposal-       │
                      │role-card-  │   │deliverables.md │
                      │design.md   │   │scenario-       │
                      │scenario-   │   │deliverables.md │
                      │deliverables│   │tech-mapping.md │
                      │.md         │   │visual-assets.md│
                      └────────────┘   └────────────────┘
```

---

## 🎭 Core Methodology: LARP + Deduction Pairing

### LARP Immersive Course (5 Acts · ~70 min)

```
Step 0: Preparation (5min)     📋 Role cards + Opening animation
  │
Act 1: Introduction (15min)    🌅 Establish positions + Wave 1 clues
  │
Act 2: Conflict (20min)        ⚡ Escalation + AI NPC interaction + Wave 2 clues
  │
Act 3: Climax (10min)          🎯 3-way choice + AI inner monologue + Truth reveal
  │
Act 4: Letter to Future (10min)✉️ Character writes letter + AI responds
  │
Act 5: Debrief (10min)         📊 Theory mapping + Discussion + Teaching report
```

### Deduction Course (7 Steps · ~55 min)

```
Step 0: Context Import (5min)     🔗 References previous LARP experience
  │
Step 1: Info Gathering (10min)    📚 3-perspective material packs
  │
Step 2: Vote (5min)               🗳️ Anonymous ballot + Simultaneous reveal
  │
Step 3: Argument (10min)          🗣️ AI interrogator (4 strategies rotating)
  │
Step 4: Revision (5min)           🔄 Position change + Comparison
  │
Step 5: AI Consequence Sim (10min)🔮 Short/medium/long-term outcomes
  │
Step 6: Truth Reveal (5min)       📜 Historical truth + Key data
  │
Step 7: Debrief (10min)           💡 Theory mapping + Reflection diary + Pairing comparison
```

### Why LARP First, Then Deduction?

| Order | Effect |
|-------|--------|
| LARP → Deduction ✅ | Students carry emotional memory into rational analysis — deeper judgment |
| Deduction → LARP ❌ | Deduction lacks emotional foundation — judgments remain superficial |

---

## 🌍 Discipline Adaptation Examples

| Discipline | LARP Scenario Example | Deduction Scenario Example | Core Conflict |
|------------|----------------------|--------------------------|---------------|
| 🏥 Medicine | Ventilator allocation | Hospital resource policy | Ethics vs Efficiency |
| ⚖️ Law | Doubtful guilt trial | Judicial reform decision | Fairness vs Security |
| 🏗️ Engineering | Bridge safety hazard | Halt vs Rush decision | Safety vs Efficiency |
| 🌾 Agriculture | New crop variety trust | GMO policy debate | Heritage vs Innovation |
| 💼 Business | Bribery dilemma | Corporate social responsibility | Profit vs Ethics |
| 📚 Education | Campus bullying intervention | Education policy choice | Equity vs Development |
| 🔬 Science | Research data fraud | Academic ethics committee | Innovation vs Integrity |
| 🎨 Arts | Art censorship | Cultural policy making | Innovation vs Heritage |

---

## 🔧 Script Tools

### research-prompt-gen.js

Generates 3-round research search queries based on discipline + school + region:

```bash
node scripts/research-prompt-gen.js \
  --school "Stanford University" \
  --discipline "医学" \
  --region "昆明"
```

Supports keyword mapping for 9 disciplines, with automatic fallback to generic discipline names.

---

## 📦 Three Deliverable Sets

### ① PPT Concept Proposal (7 files)

```
①-PPT Concept Proposal/
├── 00-Source Document.md         📄 ~500 lines of raw material
├── 01-Slide Outline.md           📋 16-page skeleton
├── 02-Detailed Slide Specs.md    📐 4 parts per slide: Goal/Copy/Visual/Notes
├── 03-Style Consistency.md       🎨 10-part brand guide
├── 04-PPT Generation Prompts.md  🤖 3-layer AI generation strategy
├── 05-Presentation Script.md     🎤 Narration version
└── 06-Live Pitch Script.md       💪 Battle-tested version
```

### ② Construction Proposal (7 files)

```
②-Construction Proposal/
├── 08-Full Detailed Proposal.md   📊 13 chapters with "5-Dimension Value"
├── 09-Pricing Scheme.md           💰 6 packages (A-F) + 3 scope boundary tables
├── 10-Internal Crosscheck.md      🔒 Internal reference
├── 11-Complete Proposal.md        📑 11 chapters + Mermaid + Renderings
├── 12-Rendering Scripts.md        🖼️ Unified style + Per-image prompts
├── 13-Final Proposal.md           ✅ Integrated version
└── 14-Execution Plan.md           📅 Task tracking (Context→Actions→Verification)
```

### ③ Scenario Designs (13 files)

```
③-Scenario Designs/
├── Paired Course Plan.md          🔄 Kolb model + Pairing logic + Semester plan
├── [LARP Series]/
│   ├── 00-Shared/Physical Scene.md 🏫 Shared physical setup
│   └── Scene 1-4/
│       └── Script Design.md        🎭 Complete 5-act LARP (~400 lines each)
└── [Deduction Series]/
    ├── 00-Shared/Mechanics.md       ⚖️ Shared 7-step deduction mechanism
    └── Scene 1-4/
        └── Deduction Design.md      📊 Complete 7-step script (~350 lines each)
```

---

## 🛤️ Roadmap

| Phase | Status | Description |
|-------|--------|-------------|
| EP-1 Structured Input | ✅ Done | Phase 0 requirements form |
| EP-2 Web Research | ✅ Done | 3-round search strategy |
| EP-3 Text Script Generation | ✅ Done | LARP + Deduction templates |
| EP-4 Universal Role Design | ✅ Done | Cross-discipline role prototypes |
| EP-5 Visual Asset Generation | ✅ Done | Gemini prompt templates |
| EP-6 Teaching Point Extraction | ✅ Done | Dual-line extraction + theory mapping |
| EP-7 Markdown Deliverables | ✅ Done | 3-set deliverable templates |
| EP-8 Project Memory | 🔜 Planned | Learn preferences from historical projects |
| EP-9 Full-Auto Mode | 🔜 Planned | One-click output of all 27 files |

---

## 🤝 Contributing

We welcome contributions of all kinds!

- 🐛 **Bug Reports** — [Open an Issue](https://github.com/circleone1980/edu-lab-designer/issues/new)
- 💡 **Feature Requests** — [Open an Issue](https://github.com/circleone1980/edu-lab-designer/issues/new) with `enhancement` label
- 📝 **Discipline Templates** — Add role prototypes and scenario examples for your discipline
- 🔧 **Template Improvements** — Enhance quality and completeness of existing templates
- 🌐 **Translations** — Help improve English documentation

### Development Flow

```bash
# 1. Fork & Clone
git clone https://github.com/YOUR_USERNAME/edu-lab-designer.git

# 2. Create branch
git checkout -b feature/your-feature

# 3. Edit & Test
#    - Verify Markdown formatting
#    - If JS changed: node -c scripts/research-prompt-gen.js

# 4. Commit & Push
git commit -m "feat: add XX discipline role prototypes"
git push origin feature/your-feature

# 5. Open a Pull Request
```

---

## ❓ FAQ

### Q: I don't use Claude Code. Can I still use this?

**Yes!** All files are Markdown — they serve as complete methodology documents on their own. You can use them with ChatGPT, Gemini, or any AI tool.

### Q: Which disciplines are supported?

**All of them.** The 4-dimension analysis framework (scene type / conflict type / knowledge form / value direction) adapts to any discipline. See `references/discipline-adapter.md` for the full methodology.

### Q: Can I use just parts of the project?

**Absolutely.** For example, if you only need the LARP script template, just use `references/larp-template.md`. Files are designed to be as decoupled as possible.

### Q: What format are the 27 output files?

Markdown (`.md`). This is the optimal format for AI-generated content, easily convertible to Word, PPT, PDF, or any other format.

---

## 📄 License

[MIT License](LICENSE) — Free to use, modify, and distribute.

---

## 🙏 Acknowledgments

- **Kolb Experiential Learning Model** — David A. Kolb
- **Dali University Digital Ideological-Political Lab** — The real-world project that validated this methodology
- **Claude Code** — Skill runtime platform
- **Gemini** — Visual asset generation

---

<div align="center">

**If this project helps you, please give it a ⭐ Star!**

[Report Bug](https://github.com/circleone1980/edu-lab-designer/issues) · [Request Feature](https://github.com/circleone1980/edu-lab-designer/issues) · [Contribute](CONTRIBUTING.md)

</div>
