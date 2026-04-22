#!/usr/bin/env node

/**
 * 调研查询生成器
 * 根据输入的学科+学校+地区，生成三轮搜索查询。
 *
 * 用法：node research-prompt-gen.js --school "大理大学" --discipline "马克思主义理论" --region "大理"
 */

const args = process.argv.slice(2);

function getArg(name) {
  const idx = args.indexOf('--' + name);
  return idx !== -1 && idx + 1 < args.length ? args[idx + 1] : '';
}

const school = getArg('school');
const discipline = getArg('discipline');
const region = getArg('region');

if (!school || !discipline || !region) {
  console.log('用法: node research-prompt-gen.js --school "学校名" --discipline "学科" --region "地区"');
  process.exit(1);
}

// 学科关键词映射
const disciplineKeywords = {
  '马克思主义理论': ['红色', '革命', '思政', '党史'],
  '医学': ['临床', '医疗', '医患', '公共卫生'],
  '法学': ['司法', '审判', '法治', '案例'],
  '工学': ['工程', '建设', '安全', '技术创新'],
  '农学': ['农业', '农村', '作物', '生态'],
  '商学': ['商业', '企业', '市场', '创业'],
  '教育学': ['教育', '教学', '教师', '学生'],
  '理学': ['科研', '实验', '发现', '学术'],
  '艺术学': ['艺术', '创作', '文化', '表演'],
};

const keywords = disciplineKeywords[discipline] || [discipline];

// 第一轮：宏观扫描
const round1 = [
  `${school} 发展历程 特色`,
  `${region} 历史 文化 特色`,
  `${discipline} 教学 痛点 改革`,
];

// 第二轮：深度挖掘
const round2 = [
  `${school} ${discipline} 学院 发展历程`,
  `${region} ${keywords[0]} 历史事件 人物`,
  `${school} 杰出校友 ${discipline}`,
  `${discipline} 伦理争议 案例 2020-2025`,
  `${keywords.join(' ')} ${region} 故事 案例`,
];

// 第三轮：交叉验证
const round3 = [
  `${school} ${region} ${keywords[0]} 故事`,
  `${discipline} 教育部 虚拟仿真 政策 2024-2025`,
  `${discipline} 教学 痛点 创新 2024-2025`,
];

console.log(`━━━ ${school} · ${discipline} · ${region} 调研搜索查询 ━━━\n`);

console.log('第一轮：宏观扫描');
round1.forEach((q, i) => console.log(`  ${i + 1}. ${q}`));

console.log('\n第二轮：深度挖掘');
round2.forEach((q, i) => console.log(`  ${i + 1}. ${q}`));

console.log('\n第三轮：交叉验证');
round3.forEach((q, i) => console.log(`  ${i + 1}. ${q}`));

console.log('\n━━━ 共 ' + (round1.length + round2.length + round3.length) + ' 条查询 ━━━');
