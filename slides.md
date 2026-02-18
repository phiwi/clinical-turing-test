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
class: text-center
---

## Project Timeline

<style>
.gantt-wrap {
  max-width: 980px;
  margin: 14px auto 0;
  overflow-x: auto;
}
.gantt-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-size: 10px;
  color: #334155;
}
.gantt-table th,
.gantt-table td {
  border: 1px solid #e2e8f0;
  height: 18px;
  padding: 0;
  text-align: center;
}
.gantt-table thead th {
  background: #f8fafc;
  color: #475569;
  font-weight: 600;
  font-size: 9px;
  white-space: nowrap;
}
.gantt-task {
  width: 150px;
  text-align: right !important;
  padding-right: 8px !important;
  font-weight: 600;
  background: #ffffff;
}
.bar-green {
  position: relative;
}
.bar-blue {
  position: relative;
}
.bar-start {
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
.bar-end {
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
.bar-green::after,
.bar-blue::after {
  content: "";
  position: absolute;
  left: 1px;
  right: 1px;
  top: 3px;
  bottom: 3px;
  border-radius: inherit;
}
.bar-green::after {
  background: #86efac;
  border: 1px solid #22c55e;
}
.bar-blue::after {
  background: #bfdbfe;
  border: 1px solid #3b82f6;
}
.milestone {
  position: relative;
}
.milestone::after {
  content: "";
  width: 10px;
  height: 10px;
  background: #f59e0b;
  border: 1px solid #d97706;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  border-radius: 2px;
}
</style>

<div style="height: 14px;"></div>

<div class="gantt-wrap">
  <table class="gantt-table">
    <thead>
      <tr>
        <th class="gantt-task">Task</th>
        <th>12 Mar</th>
        <th>19 Mar</th>
        <th>26 Mar</th>
        <th>2 Apr</th>
        <th>9 Apr</th>
        <th>16 Apr</th>
        <th>23 Apr</th>
        <th>30 Apr</th>
        <th>7 May</th>
        <th>14 May</th>
        <th>21 May</th>
        <th>28 May</th>
        <th>4 Jun</th>
        <th>11 Jun</th>
        <th>18 Jun</th>
        <th>25 Jun</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="gantt-task">Initial Presentation</td>
        <td class="milestone"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td class="gantt-task">Team Formation</td>
        <td class="bar-green bar-start"></td><td class="bar-green"></td><td class="bar-green bar-end"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td class="gantt-task">Literature Review</td>
        <td class="bar-green bar-start"></td><td class="bar-green"></td><td class="bar-green"></td><td class="bar-green bar-end"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td class="gantt-task">Data Collection</td>
        <td></td><td class="bar-blue bar-start"></td><td class="bar-blue"></td><td class="bar-blue"></td><td class="bar-blue bar-end"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td class="gantt-task">Template Design</td>
        <td></td><td></td><td class="bar-blue bar-start"></td><td class="bar-blue"></td><td class="bar-blue"></td><td class="bar-blue bar-end"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td class="gantt-task">LLM Setup</td>
        <td></td><td></td><td></td><td class="bar-green bar-start"></td><td class="bar-green"></td><td class="bar-green"></td><td class="bar-green bar-end"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td class="gantt-task">Generation</td>
        <td></td><td></td><td></td><td></td><td class="bar-green bar-start"></td><td class="bar-green"></td><td class="bar-green"></td><td class="bar-green"></td><td class="bar-green"></td><td class="bar-green bar-end"></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td class="gantt-task">Validation</td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="bar-blue bar-start"></td><td class="bar-blue"></td><td class="bar-blue"></td><td class="bar-blue"></td><td class="bar-blue"></td><td class="bar-blue bar-end"></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td class="gantt-task">Mid-term Presentation</td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="milestone"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td class="gantt-task">Finalization</td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="bar-green bar-start"></td><td class="bar-green bar-end"></td><td></td>
      </tr>
      <tr>
        <td class="gantt-task">Final Presentation</td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="milestone"></td>
      </tr>
    </tbody>
  </table>
</div>

---
class: text-center
layout: end
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
