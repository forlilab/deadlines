# Daily Update Prompt for AI Conference Deadlines

## Quick Command
Copy and paste this prompt to Claude to update the deadlines:

---

## Prompt

```
我有一个 AI 会议截止日期追踪网站 (https://forlilab.github.io/deadlines/)，代码在 /Users/jjian/Documents/Jinglin/github/deadlines

请帮我检查以下网址，查找新的会议或 workshop 截止日期，并更新到 _data/conferences.yml：

### 主要会议官网
1. NeurIPS: https://neurips.cc/
2. ICML: https://icml.cc/
3. ICLR: https://iclr.cc/
4. CVPR: https://cvpr.thecvf.com/
5. AAAI: https://aaai.org/
6. IJCAI: https://www.ijcai.org/
7. ACL: https://www.aclweb.org/
8. RECOMB: https://recomb.org/
9. ISMB: https://www.iscb.org/
10. MICCAI: https://miccai.org/
11. KDD: https://kdd.org/
12. ECCV: https://eccv.ecva.net/

### AI for Science / Biology / Drug Discovery Workshops
13. AI4Science: https://ai4sciencecommunity.github.io/
14. GenBio: https://genbio-workshop.github.io/
15. GEM: https://www.gembio.ai/
16. LMRL: https://www.lmrl.org/
17. MLGenX: https://mlgenx.github.io/
18. MLSB: https://www.mlsb.io/
19. ML4H: https://ml4h.cc/
20. GenAI4Health: https://genai4health.github.io/
21. AI4D3: https://ai4d3.github.io/
22. Imageomics: https://imageomics.github.io/

### 聚合网站
23. AI Deadlines: https://aideadlin.es/
24. WikiCFP AI: http://www.wikicfp.com/cfp/call?conference=artificial%20intelligence
25. Papers With Code: https://paperswithcode.com/conferences

### 格式要求

每个会议条目格式：
```yaml
- title: CONF [Workshop]  # 主会议用 CONF，workshop 用 CONF [Name]
  year: 2026
  id: conf26-workshop     # 小写，用连字符
  full_name: Full Conference Name
  link: https://...
  deadline: '2026-01-15 23:59:00'  # 或 TBA
  abstract_deadline: '2026-01-08 23:59:00'  # 可选
  timezone: UTC-12  # 常用: UTC-12 (AoE), America/Los_Angeles, UTC
  place: City, Country
  date: Month DD-DD, 2026
  start: 2026-01-15
  end: 2026-01-20
  paperslink:
  pwclink:
  hindex:
  sub:
    - ML          # Machine Learning
    - CV          # Computer Vision
    - NLP         # Natural Language Processing
    - DM          # Data Mining
    - HEALTH      # Healthcare & Medical AI
    - AI4Science  # AI for Science
    - AI4LifeScience  # AI for Life Sciences
    - BIO         # Computational Biology
    - CHEM        # Comp Chemistry & Drug Discovery
  note: Additional notes here.
```

### 可用的 Subject 类别
- ML: Machine Learning
- CV: Computer Vision
- NLP: Natural Language Processing
- DM: Data Mining
- HEALTH: Healthcare & Medical AI
- AI4Science: AI for Science
- AI4LifeScience: AI for Life Sciences
- BIO: Computational Biology
- CHEM: Comp Chemistry & Drug Discovery

### 任务
1. 检查上述网址是否有新的截止日期
2. 检查现有 TBA 条目是否有更新
3. 添加新发现的相关 workshops
4. 确保所有截止日期格式正确
5. 提交并推送更改到 gh-pages 分支

请开始检查并更新。
```

---

## URLs to Check Daily

### Tier 1: Major ML/AI Conferences (Check Weekly)
| Conference | URL | Typical Deadline |
|------------|-----|------------------|
| NeurIPS | https://neurips.cc/ | May |
| ICML | https://icml.cc/ | Jan-Feb |
| ICLR | https://iclr.cc/ | Sep-Oct |
| CVPR | https://cvpr.thecvf.com/ | Nov |
| AAAI | https://aaai.org/ | Aug |
| IJCAI | https://www.ijcai.org/ | Jan |
| ACL | https://www.aclweb.org/ | Jan (ARR) |
| ECCV | https://eccv.ecva.net/ | Mar (biennial) |

### Tier 2: AI4Science / Biology / Health (Check Weekly)
| Conference | URL | Typical Deadline |
|------------|-----|------------------|
| RECOMB | https://recomb.org/ | Nov |
| ISMB | https://www.iscb.org/ | Jan |
| MICCAI | https://miccai.org/ | Feb-Mar |
| ML4H | https://ml4h.cc/ | Sep |
| MLHC | https://www.mlforhc.org/ | Apr |
| CHIL | https://www.chilconference.org/ | Feb |
| PSB | http://psb.stanford.edu/ | Aug-Oct |

### Tier 3: Workshops (Check Monthly or When Announced)
| Workshop | URL | Parent Conference |
|----------|-----|-------------------|
| AI4Science | https://ai4sciencecommunity.github.io/ | NeurIPS/ICML |
| GenBio | https://genbio-workshop.github.io/ | ICML |
| GEM | https://www.gembio.ai/ | ICLR |
| LMRL | https://www.lmrl.org/ | ICLR |
| MLGenX | https://mlgenx.github.io/ | ICLR |
| MLSB | https://www.mlsb.io/ | NeurIPS |
| GenAI4Health | https://genai4health.github.io/ | NeurIPS |
| AI4D3 | https://ai4d3.github.io/ | NeurIPS |
| Imageomics | https://imageomics.github.io/ | NeurIPS |
| FM4LS | https://nips2025fm4ls.github.io/ | NeurIPS |
| TS4H | https://timeseries4health.github.io/ | NeurIPS |
| BrainBodyFM | https://brainbodyfm-workshop.github.io/ | NeurIPS |

### Tier 4: Aggregators (Check for New Discoveries)
| Site | URL | Notes |
|------|-----|-------|
| AI Deadlines | https://aideadlin.es/ | Community maintained |
| WikiCFP | http://www.wikicfp.com/cfp/ | Search for AI/ML |
| Papers With Code | https://paperswithcode.com/conferences | Conference list |
| Zitnik Lab | https://zitniklab.hms.harvard.edu/meetings/ | Bio/Health focused |

---

## Naming Conventions

### Conference IDs
- Main conference: `conf25` (e.g., `neurips25`, `icml26`)
- Workshop: `conf25-workshopname` (e.g., `neurips25-ai4science`, `iclr26-gem`)

### Title Format
- Main conference: `NeurIPS` or `ICML`
- Workshop: `NeurIPS [AI4Science]` or `ICLR [GEM]`

### Timezone Common Values
- `UTC-12` = Anywhere on Earth (AoE) - most common
- `America/Los_Angeles` = Pacific Time
- `America/New_York` = Eastern Time
- `UTC` = Coordinated Universal Time

---

## Example: Adding a New Workshop

```yaml
- title: NeurIPS [NewWorkshop]
  year: 2026
  id: neurips26-newworkshop
  full_name: New Workshop on Something Cool
  link: https://newworkshop.github.io/
  deadline: '2026-09-15 23:59:00'
  abstract_deadline:
  timezone: UTC-12
  place: San Diego, CA
  date: December 6, 2026
  start: 2026-12-06
  end: 2026-12-06
  paperslink:
  pwclink:
  hindex:
  sub:
    - AI4Science
    - AI4LifeScience
  note: New workshop description here.
```

---

## Git Commands

```bash
# Check status
git status

# Add and commit
git add _data/conferences.yml
git commit -m "Update deadlines: [description]"

# Push to deploy
git push origin gh-pages
```

---

## Monthly Checklist

- [ ] Check all TBA entries for updates
- [ ] Look for newly announced workshops
- [ ] Verify past deadlines are correct
- [ ] Remove very old entries (>2 years past)
- [ ] Check for new conferences in AI4Science space
