---
name: asic
description: 특정 용도에 최적화된 맞춤형 반도체, AI 추론 효율화의 핵심
metadata:
  type: term
category: 반도체/산업
tags: [반도체, ai, 추론, 맞춤형칩]
related:
  - "[[pages/terms/hbm]]"
  - "[[pages/terms/foundry]]"
  - "[[pages/terms/test-socket]]"
sources: []
---

# ASIC (Application Specific Integrated Circuit)

특정 응용 분야에 최적화하여 설계된 맞춤형 반도체.

## 상세 설명

범용 GPU(Nvidia)와 달리 특정 연산(AI 추론, 암호화, 네트워킹 등)만을 수행하도록 설계된 칩. 주요 특징:

- **전력 효율**: 범용 GPU 대비 동일 연산에서 소비 전력이 훨씬 낮음
- **맞춤 최적화**: 특정 모델·워크로드에 최적화된 연산 구조
- **진입 장벽**: 설계·제조에 대규모 투자 필요, 수정 불가능

**AI 인프라에서의 ASIC 확산:**
- Google: TPU (Tensor Processing Unit)
- Amazon: Trainium, Inferentia
- Meta: MTIA
- Apple: Neural Engine

범용 GPU 시장(Nvidia 독점)에서 빅테크들이 자체 ASIC을 개발하며 AI 추론 비용을 낮추려는 흐름. ASIC 확산은 Nvidia의 학습(Training) 지배력과 추론(Inference) 시장을 분리하는 구조 변화의 신호.

## 관련 용어

- [[pages/terms/hbm]] — ASIC에도 탑재되는 고대역폭 메모리
- [[pages/terms/foundry]] — ASIC 위탁 생산 (TSMC, 삼성파운드리)
- [[pages/terms/test-socket]] — ASIC 양산 전 테스트 공정 필수품

## 실제 등장 맥락

- 2026-05-21 [[daily/2026-05-21]] — 리노공업, AI 추론·ASIC 시장 확대에 따른 테스트소켓 수요 증가로 키움증권 목표가 상향
