---
layout: project
title: TriMemory
permalink: /projects/trimemory/
project_name: TriMemory
project_kicker: Memory after the reset
project_summary: A controlled research program asking whether a learned memory can remain useful after short-term state is explicitly cleared.
project_status: Research in progress
project_accent: coral
project_image: /assets/images/trimemory-reset.png
project_image_alt: TriMemory reset-survival experiment figure
project_figure_caption: A structured long-term memory survives an explicit STM reset on the tested task surface.
project_focus: continual learning · memory audits
project_stack: PyTorch · PEFT · linear-attention prototypes · reproducible contracts
project_repo_name: TriMemory
repository: https://github.com/Ffffffffchopin/TriMemory
---

## The question

Many “memory” demonstrations quietly leave the answer in the active context. TriMemory makes the boundary explicit: a wake phase writes selected traces, Sleep commits a bounded structured long-term memory, short-term memory is reset, and the query arrives afterward.

The project began with a State → Sleep → Weight hypothesis. The current evidence is narrower and more useful: structured replay can work on a controlled surface, while direct consolidation into model weights remains unreliable. That distinction is the reason the project continues as an audit program rather than a single architecture claim.

## What is measured

The primary structured Sleep-LTM route reaches **1.0000 ± 0.0000 across three fixed seeds** on the naturalized V03 task. The matched controls score 0.5000 for no Sleep, 0.7500 for no replay, 0.5000 for a lexical RAG-like control, and 0.2865 ± 0.0097 for continued-SFT LoRA. A separate real-model probe at 16K and 32K input lengths ties a RAG-like control at 0.8125, so it is reported as an integration probe rather than a general language-memory benchmark.

The earlier parameter-memory audit adds a necessary counterpoint: a rank-16 LoRA can acquire 12 randomized key/token bindings exactly, but the same dose preserves the base model’s next-token top prediction on only 38.89% of six unrelated prompts. A KL anchor improves one Qwen operating point; the copied SmallLM2 dose does not transfer. These are useful boundaries, not a claim of universal mitigation.

## What the project contributes

- A reset-aware evaluation protocol that separates active state, replay, retrieval, and weights.
- Controls for no Sleep, no replay, continued SFT, shuffled state, and direct State-to-weight consolidation.
- A reproducible evidence matrix that keeps the strongest positive result attached to its exact task surface.
- A route toward ROSA-style online suffix memory, where exact replay and semantic retrieval can be tested separately.

## Current boundary

The evidence does not establish open-ended lifelong learning, arbitrary natural-language memory, superiority over full attention or SSMs in general, or infinite memory. The repository records the failed routes alongside the positive structured-memory gate so later work can start from a known boundary.

<div class="evidence-callout"><span class="evidence-callout__label">Status</span><strong>Research in progress · manuscripts and reproducibility materials are being maintained in the repository.</strong><a class="text-link" href="https://github.com/Ffffffffchopin/TriMemory">Inspect the source and evidence →</a></div>
