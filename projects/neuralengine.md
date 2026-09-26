---
layout: project
title: NeuralEngine
permalink: /projects/neuralengine/
project_name: NeuralEngine
project_kicker: Source becomes a world
project_summary: A Godot-oriented engine for generating interactive behavior from structured source programs, with runtime evidence as the quality boundary.
project_status: Active research
project_accent: blue
project_image: /assets/images/neuralengine-worlds.png
project_image_alt: NeuralEngine generated worlds and gameplay probes
project_figure_caption: Source-program candidates are evaluated against real engine behavior, not only text similarity.
project_focus: program-to-behavior generation · game worlds
project_stack: Godot · GDScript · Python · source/runtime replay · LoRA probes
project_repo_name: NeuralEngine
repository: https://github.com/Ffffffffchopin/NeuralEngine
---

## The idea

NeuralEngine treats a generated game script as a program with consequences. A model should not receive credit because its text looks plausible; the output must parse, compile, bind to the intended scene objects, and produce the expected behavior in Godot.

The current curriculum is built from runtime-verified source families: player movement, camera behavior, interaction, and stochastic NPC logic. Source-file groups stay intact during holdout construction so a near-duplicate script cannot quietly become a test example.

## Evidence and the honest result

The source/API replay suite contains **25 training candidates across four projects and eight source-file groups**. The stochastic NPC comparison matches **3,600 paired frames across three seeds**, while a speed negative control changes the observed trajectory. The project has **22 Python tests and nine Godot checks** passing for the data and runtime contracts.

The first real 0.5B LoRA curriculum run is a useful failure: on six project-held-out rows, raw unconstrained generation scored **0/6** for parse, compile, binding, behavior, and acceptance. This is not a finished game-generation system. It is evidence that source-to-behavior generation needs a stronger objective or decoding contract before scale is meaningful.

## Why this matters

The boundary between “generated code” and “generated behavior” is where many agentic game demos become difficult to audit. NeuralEngine makes that boundary a first-class artifact. The negative result is already narrowing the design space: more epochs alone are not the next intervention; independent verified data and a curriculum or transaction-level objective are.

<div class="architecture-strip" aria-label="NeuralEngine evaluation gates"><span>source</span><i>→</i><span>parse</span><i>→</i><span>compile</span><i>→</i><span>bind</span><i>→</i><span>behave</span></div>

<div class="evidence-callout"><span class="evidence-callout__label">Status</span><strong>Active research · current results are controller-fixture coverage, not full-game asset distillation.</strong><a class="text-link" href="https://github.com/Ffffffffchopin/NeuralEngine">Inspect the experiments →</a></div>
