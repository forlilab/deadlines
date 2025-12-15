# Forli Lab AI Conference Deadlines

[![Website](https://img.shields.io/badge/Website-forlilab.github.io%2Fdeadlines-blue)](https://forlilab.github.io/deadlines/)
[![GitHub](https://img.shields.io/badge/GitHub-forlilab%2Fdeadlines-green)](https://github.com/forlilab/deadlines)

Countdown timers for AI/ML conferences relevant to **computational biology**, **drug discovery**, **AI for science**, and **healthcare AI**.

🔗 **Live Site**: [https://forlilab.github.io/deadlines/](https://forlilab.github.io/deadlines/)

---

## Conference Categories

We track **9 categories** of conferences and workshops:

### Core AI/ML Conferences
| Category | Code | Description | Example Conferences |
|----------|------|-------------|---------------------|
| **Machine Learning** | `ML` | General ML/AI conferences | NeurIPS, ICML, ICLR, AAAI, IJCAI |
| **Computer Vision** | `CV` | Vision and image analysis | CVPR, ECCV, WACV, MICCAI |
| **Natural Language Processing** | `NLP` | Language and text | ACL, EMNLP, NAACL, EACL |
| **Data Mining** | `DM` | Data science and mining | KDD, SIGIR, WSDM |

### Life Science & Healthcare AI
| Category | Code | Description | Example Conferences |
|----------|------|-------------|---------------------|
| **AI for Science** | `AI4Science` | Scientific discovery with AI | NeurIPS AI4Science, ICML AI4Science |
| **AI for Life Sciences** | `AI4LifeScience` | Biology-focused AI | GenBio, GEM, LMRL, FM4LS |
| **Healthcare & Medical AI** | `HEALTH` | Clinical and health applications | ML4H, CHIL, MLHC, GenAI4Health |
| **Computational Biology** | `BIO` | Genomics, proteins, systems biology | RECOMB, ISMB, MLSB |
| **Comp Chemistry & Drug Discovery** | `CHEM` | Molecular design, drug discovery | GRC CADD, AI4D3, CURE-Bench |

---

## What's Tracked

### Major Conferences (Annual)
- **NeurIPS** - Neural Information Processing Systems
- **ICML** - International Conference on Machine Learning
- **ICLR** - International Conference on Learning Representations
- **CVPR/ECCV** - Computer Vision conferences
- **ACL/EMNLP** - NLP conferences
- **AAAI/IJCAI** - AI conferences
- **KDD** - Data Mining
- **MICCAI** - Medical Image Computing
- **RECOMB/ISMB** - Computational Biology

### Workshops (NeurIPS 2025)
| Workshop | Focus |
|----------|-------|
| AI4Science | Scientific Discovery |
| GenAI4Health | Healthcare GenAI |
| AI4D3 | Virtual Cells, Drug Discovery |
| Imageomics | Biological Imaging |
| TS4H | Time Series for Health |
| FM4LS | Foundation Models for Life Sciences |
| BrainBodyFM | EEG, Biosignals |
| CURE-Bench | Therapeutic Reasoning Competition |

### Workshops (ICLR 2026)
| Workshop | Focus |
|----------|-------|
| GEM | Generative bioMolecular Design |
| LMRL | Representations of Life |
| MLGenX | ML for Genomics |

### Workshops (ICML 2026)
| Workshop | Focus |
|----------|-------|
| GenBio | Generative AI for Biology |
| AI4Science | AI for Scientific Discovery |
| FM4LS | Foundation Models for Life Sciences |

---

## Features

- ⏱️ **Countdown timers** to all deadlines
- 📅 **Calendar view** of conferences and deadlines
- 🏷️ **Filter by category** (ML, CV, NLP, HEALTH, AI4Science, etc.)
- 🌍 **Timezone conversion** to your local time
- 📥 **Export to Google Calendar** or .ics file
- 🔗 **Direct links** to conference websites and accepted papers

---

## For Lab Members

### Quick Filters
- **All AI4Science**: [/?sub=AI4Science,AI4LifeScience](https://forlilab.github.io/deadlines/?sub=AI4Science,AI4LifeScience)
- **Drug Discovery**: [/?sub=CHEM,AI4LifeScience](https://forlilab.github.io/deadlines/?sub=CHEM,AI4LifeScience)
- **Healthcare**: [/?sub=HEALTH](https://forlilab.github.io/deadlines/?sub=HEALTH)
- **Comp Bio**: [/?sub=BIO](https://forlilab.github.io/deadlines/?sub=BIO)
- **Core ML**: [/?sub=ML](https://forlilab.github.io/deadlines/?sub=ML)

### Adding New Conferences

1. Edit `_data/conferences.yml`
2. Follow this format:
```yaml
- title: NeurIPS [WorkshopName]
  year: 2026
  id: neurips26-workshopname
  full_name: Full Workshop Name
  link: https://workshop-website.com
  deadline: '2026-09-15 23:59:00'
  timezone: UTC-12
  place: City, Country
  date: December 6, 2026
  start: 2026-12-06
  end: 2026-12-06
  sub:
    - AI4Science
    - AI4LifeScience
  note: Workshop description
```

3. Commit and push to `gh-pages` branch

See [UPDATE_PROMPT.md](UPDATE_PROMPT.md) for detailed instructions and a comprehensive URL checklist.

---

## Contributing

To add or update a deadline:
1. Fork the repository
2. Update `_data/conferences.yml`
3. Send a pull request

Required fields: `title`, `year`, `id`, `link`, `deadline`, `timezone`, `date`, `place`, `sub`

Optional fields: `full_name`, `abstract_deadline`, `note`, `hindex`, `paperslink`, `pwclink`

---

## Acknowledgments

This project is forked from [ai-deadlines](https://github.com/abhshkdz/ai-deadlines) by [@abhshkdz](https://github.com/abhshkdz).

Customized for [Forli Lab](https://forlilab.github.io/) with focus on:
- AI for Science
- Drug Discovery & Computational Chemistry
- Computational Biology
- Healthcare AI

---

## License

This project is licensed under [MIT](https://abhshkdz.mit-license.org/).

Uses [IcoMoon Icons](https://icomoon.io/#icons-icomoon): [GPL](http://www.gnu.org/licenses/gpl.html) / [CC BY4.0](http://creativecommons.org/licenses/by/4.0/)
