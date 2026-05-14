# Finance Wiki Log

> 활동 타임라인. 새 항목은 맨 위에 추가한다.
> 파싱 팁: `grep "^## \[" log.md | head -5` → 최근 5개 항목

---

## [2026-05-14] terms-init | 용어 사전 초기 구축 — 23개 term 페이지 생성
- Created: [[pages/terms/cpi]], [[pages/terms/fed]], [[pages/terms/hawkish-dovish]], [[pages/terms/bond-yield]], [[pages/terms/wti]], [[pages/terms/geopolitical-premium]]
- Created: [[pages/terms/per]], [[pages/terms/valuation]], [[pages/terms/ipo]], [[pages/terms/market-cap]], [[pages/terms/etf]], [[pages/terms/price-target]], [[pages/terms/capex]]
- Created: [[pages/terms/panic-selling]], [[pages/terms/profit-taking]], [[pages/terms/buy-rumor-sell-news]], [[pages/terms/momentum]]
- Created: [[pages/terms/hbm]], [[pages/terms/mlcc]], [[pages/terms/foundry]], [[pages/terms/fc-bga]], [[pages/terms/value-chain]], [[pages/terms/mau]]
- Source: [[daily/2026-05-13]], [[daily/2026-05-14]] 에서 용어 추출
- Updated: [[index.md]] Terms 섹션 추가, [[CLAUDE.md]] term 페이지 타입 및 ingest 워크플로우 업데이트

---

## [2026-05-14] daily-ingest | KOSPI -2.6% 급락, 미국 30년물 5% 돌파(20년 만에 최초), Warsh 연준 의장 인준
- Raw: [[raw/daily/2026-05-14]]
- Report: [[daily/2026-05-14]]
- Updated: [[pages/companies/005930-samsung-electronics]], [[pages/companies/nvda-nvidia]]
- Created: [[pages/companies/009150-samsung-electro-mechanics]], [[pages/companies/036570-ncsoft]], [[pages/companies/039130-hanatour]], [[pages/companies/csco-cisco]]
- Sectors: [[pages/sectors/ai-semiconductor]], [[pages/sectors/energy]], [[pages/sectors/gaming]], [[pages/sectors/travel]]
- Macro: [[pages/macro/usd-krw]], [[pages/macro/wti]], [[pages/macro/us-10y-yield]], [[pages/macro/us-30y-yield]]
- Sentiment: bearish (KOSPI -2.6% / 30년물 5% 돌파 / 이란 협상 교착 / Warsh 매파 인준)

---

## [2026-05-13] daily-ingest | KOSPI 사상 최고 7844, DeepSeek AI 쇼크, 미국 CPI 3.8%
- Raw: [[raw/daily/2026-05-13]]
- Report: [[daily/2026-05-13]]
- Updated: [[pages/companies/005380-hyundai-motor]], [[pages/companies/nvda-nvidia]], [[pages/companies/263750-pearl-abyss]], [[pages/companies/016380-kg-steel]], [[pages/companies/005930-samsung-electronics]]
- Sectors: [[pages/sectors/robotics]], [[pages/sectors/ai-semiconductor]], [[pages/sectors/energy]], [[pages/sectors/gaming]]
- Macro: [[pages/macro/usd-krw]], [[pages/macro/wti]], [[pages/macro/us-10y-yield]], [[pages/macro/us-cpi]]
- Sentiment: neutral (국내 bullish — KOSPI 사상 최고 / 글로벌 bearish — AI 쇼크·인플레·지정학)

---

## [2026-05-13] init | Finance Wiki 구조 초기화
- Created: CLAUDE.md, index.md, log.md
- Created: daily/, raw/daily/, pages/companies/, pages/sectors/, pages/macro/
- Created: scripts/fetch-news.py, scripts/daily-ingest.sh
- Created: launchd/com.financewiki.daily.plist
