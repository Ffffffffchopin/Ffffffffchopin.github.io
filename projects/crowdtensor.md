---
layout: project
title: CrowdTensor
permalink: /projects/crowdtensor/
project_name: CrowdTensor
project_kicker: Training as a commons
project_summary: An open coordination layer for continual training when workers are intermittent, heterogeneous, and independently operated.
project_status: Prototype / evaluated
project_accent: lime
project_image: /assets/images/crowdtensor-dashboard.png
project_image_alt: CrowdTensor training coordination dashboard
project_figure_caption: The project treats training work as accountable units with lineage, validation, and recovery.
project_focus: distributed training · reliability
project_stack: PyTorch · Transformers · PEFT · Accelerate · FSDP2 · checkpoint lineage
project_repo_name: CrowdTensor
repository: https://github.com/Ffffffffchopin/CrowdTensor
---

## The problem

Large-scale training is usually described as if all workers are present, synchronized, and trusted. CrowdTensor explores a different operating environment: useful compute arrives in bursts, workers may disappear, and a coordinator must know which updates are valid before they become part of the shared lineage.

The core abstraction is a **WorkUnit**. Placement, capability matching, checkpoint lineage, stale-worker fencing, and exactly-once validation receipts are explicit interfaces. The project uses established numerical backends rather than pretending the coordinator is a new optimizer.

## What is already demonstrated

- **9** uninterrupted/interrupted recovery pairs produced identical final adapter hashes under the controlled replay protocol.
- **201** automated tests cover the standalone package and its recovery contracts.
- A limited Qwen2.5-7B GSM8K showcase moved a 128-item holdout from **71.875% to 74.219%** across successive logical worker groups.
- A Commons3B controlled campaign accepted **11,052 tokens** over eight unique updates and reduced 16-item holdout token loss from **0.9121 to 0.5856**.

These results validate the accounting and recovery path. They are not evidence that arbitrary public devices can train a frontier model, and the current “commons” campaign models logical workers rather than an open volunteer WAN.

## System shape

<div class="architecture-strip" aria-label="CrowdTensor pipeline"><span>capability</span><i>→</i><span>work unit</span><i>→</i><span>validated delta</span><i>→</i><span>lineage</span><i>→</i><span>resume</span></div>

The repository’s provider/plugin boundary leaves hardware-specific kernels to PyTorch, PEFT, Accelerate, FSDP2, or DeepSpeed. Its research value is in the operational contract: a contribution can be interrupted, reassigned, checked, and resumed without silently accepting stale state.

## Next experiment

The next useful test is a real pretrained-language-model comparison that separates task quality from the synthetic cost model. Until that is complete, the project is best understood as a reliable coordination prototype with bounded training evidence.

<div class="evidence-callout"><span class="evidence-callout__label">Status</span><strong>Prototype / evaluated · Apache-2.0 open source.</strong><a class="text-link" href="https://github.com/Ffffffffchopin/CrowdTensor">Inspect the architecture →</a></div>
