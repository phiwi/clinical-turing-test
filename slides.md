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
coverDate: 12.03.2026
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

```mermaid {scale: 0.82}
%%{init: {'theme':'base','themeVariables': {'primaryColor':'#f8fafc','primaryTextColor':'#334155','primaryBorderColor':'#64748b','lineColor':'#64748b','fontSize':'14px'}, 'flowchart': {'curve': 'linear', 'htmlLabels': false}} }%%
flowchart TD
  S[Clinical Need]
  A1[De-ID]
  A2[Context Loss]
  A3[Lower NLP Utility]
  A4[Research Blocked]

  B1[Synthetic Generation]
  B2[Safety Checks]
  B3[Shareable Data]
  B4[Training & Research]

  S --> A1 --> A2 --> A3 --> A4
  S --> B1 --> B2 --> B3 --> B4

  classDef bad fill:#fef2f2,stroke:#b91c1c,stroke-width:1.2px,color:#7f1d1d;
  classDef good fill:#f0fdf4,stroke:#15803d,stroke-width:1.2px,color:#14532d;
  classDef neutral fill:#f8fafc,stroke:#64748b,stroke-width:1.2px,color:#334155;

  class S neutral;
  class A1,A2,A3,A4 bad;
  class B1,B2,B3,B4 good;
```

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
%%{init: {'theme':'base','themeVariables': {'primaryColor':'#f8fafc','primaryTextColor':'#334155','primaryBorderColor':'#64748b','lineColor':'#64748b','fontSize':'14px'}, 'flowchart': {'curve': 'linear', 'htmlLabels': false}} }%%
graph TD
  A[Clinical Archetype] --> B[Prompting + Templates]
  B --> C[LLM Generation]
  C --> D[Constraint Checks]
  D --> E[Synthetic Discharge]

  classDef bad fill:#fef2f2,stroke:#b91c1c,stroke-width:1.2px,color:#7f1d1d;
  classDef good fill:#f0fdf4,stroke:#15803d,stroke-width:1.2px,color:#14532d;
  classDef neutral fill:#f8fafc,stroke:#64748b,stroke-width:1.2px,color:#334155;

  class A,B,C,D neutral;
  class E good;
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
%%{init: {'theme':'base','themeVariables': {'primaryColor':'#f8fafc','primaryTextColor':'#334155','primaryBorderColor':'#64748b','lineColor':'#64748b','fontSize':'14px'}, 'flowchart': {'curve': 'linear', 'htmlLabels': false}} }%%
graph TD
  G[Generated Letter] --> C1[Clinical Rules]
  G --> C2[Style Consistency]
  C1 --> Q[Quality Score]
  C2 --> Q
  Q -->|Pass| S[Shareable Dataset]
  Q -->|Fail| R[Regenerate]

  classDef bad fill:#fef2f2,stroke:#b91c1c,stroke-width:1.2px,color:#7f1d1d;
  classDef good fill:#f0fdf4,stroke:#15803d,stroke-width:1.2px,color:#14532d;
  classDef neutral fill:#f8fafc,stroke:#64748b,stroke-width:1.2px,color:#334155;

  class G,C1,C2,Q neutral;
  class S good;
  class R bad;
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

</div>
</div>

:::tip {title="Why it matters" class="mt-6 text-lg leading-snug font-semibold"}
✅ **If the test is passed, we unlock privacy-safe NLP research.**
:::

<div class="mt-8 text-sm opacity-70">
Contact: Philipp Wiesenbach · Emre Calik

Dieterichlab, Computational Cardiology
</div>
