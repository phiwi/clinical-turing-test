---
title: Synthetic Clinical Text Generation
layout: cover
theme: academic
class: text-left text-white
colorSchema: light
mdc: true
themeConfig:
  paginationX: r
  paginationY: b
coverAuthor: "Philipp Wiesenbach"
coverDate: 16.02.2026
coverBackgroundUrl: cover.jpg
coverBackgroundSource: Kumar Shridhar
coverBackgroundSourceUrl: https://chatbotsmagazine.com/how-close-are-chatbots-to-pass-turing-test-33f27b18305e 
---

## Synthetic Discharge Summaries

**The Clinical Turing Test for Medical NLP**

Medical Informatics Elective · 5 minutes

<div class="abs-br m-6 text-sm opacity-50">
  Press <kbd>space</kbd> to advance · <kbd>?</kbd> for controls
</div>

---

## Why We Need Synthetic Clinical Text

<div class="grid grid-cols-2 gap-10 mt-6">
<div>

### The Data Dilemma

- Real discharge letters cannot leave hospital infrastructure.
- Anonymization is slow, costly, and often removes clinical nuance.
- Research stalls because *data sharing is blocked*.

:::info {title="Goal"}
Generate **realistic, privacy-safe** discharge summaries that keep clinical logic intact.
:::

</div>
<div>

<div class="flow-diagram">
  <div class="flow-row">
    <Motion tag="div" class="flow-node danger" :initial="{ opacity: 0, y: 12 }" :enter="{ opacity: 1, y: 0, transition: { delay: 0.1 } }">
      Real EHR Text
    </Motion>
    <div class="flow-arrow">→</div>
    <Motion tag="div" class="flow-node warn" :initial="{ opacity: 0, y: 12 }" :enter="{ opacity: 1, y: 0, transition: { delay: 0.2 } }">
      Blocked Sharing
      <div class="flow-sub">Privacy Risk</div>
    </Motion>
  </div>

  <div class="flow-row">
    <Motion tag="div" class="flow-node muted" :initial="{ opacity: 0, y: 12 }" :enter="{ opacity: 1, y: 0, transition: { delay: 0.3 } }">
      De-ID
    </Motion>
    <div class="flow-arrow">→</div>
    <Motion tag="div" class="flow-node muted" :initial="{ opacity: 0, y: 12 }" :enter="{ opacity: 1, y: 0, transition: { delay: 0.4 } }">
      Context Loss
    </Motion>
    <div class="flow-arrow">→</div>
    <Motion tag="div" class="flow-node muted" :initial="{ opacity: 0, y: 12 }" :enter="{ opacity: 1, y: 0, transition: { delay: 0.5 } }">
      Low Utility
    </Motion>
  </div>

  <div class="flow-row">
    <Motion tag="div" class="flow-node good" :initial="{ opacity: 0, y: 12 }" :enter="{ opacity: 1, y: 0, transition: { delay: 0.6 } }">
      Synthetic Text
    </Motion>
    <div class="flow-arrow">→</div>
    <Motion tag="div" class="flow-node good" :initial="{ opacity: 0, y: 12 }" :enter="{ opacity: 1, y: 0, transition: { delay: 0.7 } }">
      Shareable
    </Motion>
    <div class="flow-arrow">→</div>
    <Motion tag="div" class="flow-node good" :initial="{ opacity: 0, y: 12 }" :enter="{ opacity: 1, y: 0, transition: { delay: 0.8 } }">
      Model Training
    </Motion>
  </div>
</div>

</div>
</div>

---

## Project C: Generation Pipeline

<div class="grid grid-cols-2 gap-10 mt-6">
<div>
### Inputs

- Archetype scenarios from clinicians
- Local LLMs on-premise (Llama 3, Mistral)
- Few-shot style templates

### Outputs

- Coherent discharge summaries
- Consistent diagnoses, meds, follow-up

</div>
<div>

```mermaid
graph LR
  A[Clinical Archetype] --> B[Prompting + Templates]
  B --> C[LLM Generation]
  C --> D[Constraint Checks]
  D --> E[Synthetic Discharge]

  style A fill:#e0f2fe,stroke:#0284c7
  style B fill:#ede9fe,stroke:#7c3aed
  style D fill:#fef9c3,stroke:#eab308
  style E fill:#dcfce7,stroke:#16a34a
```

</div>
</div>

---

## Safety & Quality Gates

<div class="grid grid-cols-2 gap-10 mt-6">
<div>

### Automated Checks

- Allergy conflicts (e.g., penicillin)
- Medication-diagnosis consistency
- Vital sign plausibility
- Temporal logic (admit -> treat -> discharge)

:::warning {title="Red Flags"}
Hallucinated meds, impossible timelines, missing follow-up.
:::

</div>
<div>

```mermaid
graph TD
  G[Generated Letter] --> C1[Clinical Rules]
  G --> C2[Style Consistency]
  C1 --> Q[Quality Score]
  C2 --> Q
  Q -->|Pass| S[Shareable Dataset]
  Q -->|Fail| R[Regenerate]

  style G fill:#ede9fe,stroke:#7c3aed
  style Q fill:#fef9c3,stroke:#eab308
  style S fill:#dcfce7,stroke:#16a34a
  style R fill:#fee2e2,stroke:#ef4444
```

</div>
</div>

---
layout: end
class: text-center
---

# The Clinical Turing Test

<div class="grid grid-cols-2 gap-8 mt-6 text-left">
<div>

### Evaluation

- 20 real + 20 synthetic letters
- Blind review by medical students and clinicians
- Pass if reviewers cannot reliably tell the difference

</div>
<div>

### Student Roles

- **Medical:** define archetypes, review realism
- **CS:** prompting, validation, local inference

:::tip {title="Why it matters"}
If the test is passed, we unlock privacy-safe NLP research.
:::

</div>
</div>

<div class="mt-8 text-sm opacity-70">
Contact: Philipp Wiesenbach · Computational Cardiology, UKHD
</div>
