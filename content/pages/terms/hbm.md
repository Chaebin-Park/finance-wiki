---
type: term
category: 반도체/산업
tags: [반도체, 메모리, ai, gpu]
related:
  - "[[pages/terms/capex]]"
  - "[[pages/terms/foundry]]"
  - "[[pages/terms/value-chain]]"
sources: []
---

# HBM (High Bandwidth Memory / 고대역폭 메모리)

AI 가속기(GPU, NPU)에 탑재되는 고성능 메모리. 일반 DRAM 대비 훨씬 넓은 데이터 전송 대역폭을 제공.

## 상세 설명

HBM은 여러 개의 DRAM 다이를 수직으로 쌓아(TSV, Through Silicon Via) 연결한 구조다.

세대별 발전:
- HBM2e → HBM3 → HBM3e (현재 주력)
- 세대가 올라갈수록 용량·대역폭 증가, 전력 효율 개선

AI 칩과의 관계:
- NVIDIA H100/B200, AMD MI300X 등 AI 가속기에 필수
- HBM 없이는 대규모 언어모델(LLM) 학습/추론 불가

공급 구조:
- SK하이닉스가 HBM3e 시장 점유율 1위 (NVIDIA 주요 공급사)
- 삼성전자가 추격 중
- Micron도 진입

HBM 수급이 AI 인프라 투자 사이클의 병목이 될 수 있다.

## 관련 용어

- [[pages/terms/capex]] — 빅테크 AI CAPEX의 상당 부분이 HBM 탑재 칩에 집중
- [[pages/terms/foundry]] — HBM은 메모리사 자체 제조
- [[pages/terms/value-chain]] — HBM → GPU → 데이터센터 밸류체인

## 실제 등장 맥락

- 2026-05-13 [[daily/2026-05-13]] — "DeepSeek AI 쇼크가 HBM/AI 메모리 수요에 미치는 영향 주시" — 삼성전자 투자 체크포인트.
