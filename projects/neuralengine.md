---
layout: project
title: NeuralEngine
permalink: /projects/neuralengine/
project_name: NeuralEngine
project_kicker: Source becomes a world
project_summary: A source-to-world engine for generating interactive behavior from structured programs, with runtime evidence as the quality boundary.
project_status: Core project / active research
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

NeuralEngine treats a generated game script as a program with consequences. A model should not receive credit because its text looks plausible; the output must parse, compile, bind to the intended scene objects, and produce the expected behavior in Godot. The project is designed as a possible world-model interface: language is used to propose a transition rule, while the engine supplies the state, action, and consequence that make the proposal testable.

The current curriculum is built from runtime-verified source families: player movement, camera behavior, interaction, and stochastic NPC logic. Source-file groups stay intact during holdout construction so a near-duplicate script cannot quietly become a test example.

<div class="project-thesis-grid">
  <div><span class="project-thesis-grid__number">01</span><strong>Generate a policy</strong><p>Source is treated as an executable candidate, not a prose answer.</p></div>
  <div><span class="project-thesis-grid__number">02</span><strong>Instantiate a world</strong><p>Godot provides objects, state transitions, and visible consequences.</p></div>
  <div><span class="project-thesis-grid__number">03</span><strong>Measure the boundary</strong><p>Every accepted behavior keeps a trace back to its source and test.</p></div>
</div>

<figure class="project-visual"><img src="/assets/images/neuralengine-pipeline.svg" alt="Conceptual NeuralEngine system map from source program to runtime evidence" loading="lazy"><figcaption><span>Concept map</span>NeuralEngine makes the source-to-world boundary explicit; this diagram describes the intended interface, not an additional measured result.</figcaption></figure>

## Evidence and the honest result

The source/API replay suite contains **25 training candidates across four projects and eight source-file groups**. The stochastic NPC comparison matches **3,600 paired frames across three seeds**, while a speed negative control changes the observed trajectory. The project has **22 Python tests and nine Godot checks** passing for the data and runtime contracts.

The first real 0.5B LoRA curriculum run is a useful failure: on six project-held-out rows, raw unconstrained generation scored **0/6** for parse, compile, binding, behavior, and acceptance. This is not a finished game-generation system. It is evidence that source-to-behavior generation needs a stronger objective or decoding contract before scale is meaningful.

<div class="evidence-matrix" aria-label="NeuralEngine current evidence">
  <div><span>Observed</span><strong>25</strong><small>runtime-verified training candidates</small></div>
  <div><span>Observed</span><strong>3,600</strong><small>paired frames across three seeds</small></div>
  <div><span>Observed</span><strong>31</strong><small>Python and Godot checks passing</small></div>
  <div class="evidence-matrix__limit"><span>Open boundary</span><strong>0/6</strong><small>held-out raw generations accepted</small></div>
</div>

## Why this matters

The boundary between “generated code” and “generated behavior” is where many agentic game demos become difficult to audit. NeuralEngine makes that boundary a first-class artifact. The negative result is already narrowing the design space: more epochs alone are not the next intervention; independent verified data and a curriculum or transaction-level objective are.

The longer-term research direction is to let a model propose compact mechanisms that can be composed, replayed, and tested inside a controllable world. That gives a world-model project a concrete engineering handle: the proposal is only useful when it changes the world in the intended way and remains inspectable after execution.

<div class="architecture-strip" aria-label="NeuralEngine evaluation gates"><span>source</span><i>→</i><span>parse</span><i>→</i><span>compile</span><i>→</i><span>bind</span><i>→</i><span>behave</span></div>

<div class="evidence-callout"><span class="evidence-callout__label">Status</span><strong>Active research · current results are controller-fixture coverage, not full-game asset distillation.</strong><a class="text-link" href="https://github.com/Ffffffffchopin/NeuralEngine">Inspect the experiments →</a></div>
