---
layout: portfolio_home
title: Home
permalink: /
---

<section class="hero" aria-labelledby="hero-title">
  <canvas class="hero__canvas" id="research-network" aria-hidden="true"></canvas>
  <div class="hero__grid">
    <div class="hero__copy">
      <p class="eyebrow">Independent AI research · open systems · executable evidence</p>
      <h1 id="hero-title">Yuhao Xu<span class="hero__alias">/ HsuYugo</span></h1>
      <p class="hero__lead">I build small, testable systems around a large question: how can an intelligent system remember, learn, and act when its resources and assumptions are limited?</p>
      <div class="hero__actions">
        <a class="button button--solid" href="#work">Explore the work <span aria-hidden="true">↓</span></a>
        <a class="button button--quiet" href="https://github.com/Ffffffffchopin">GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <div class="hero__signal" aria-label="Research themes">
      <span class="signal-node signal-node--a">memory</span>
      <span class="signal-node signal-node--b">agents</span>
      <span class="signal-node signal-node--c">worlds</span>
      <span class="signal-node signal-node--d">evidence</span>
    </div>
  </div>
  <div class="hero__footer">
    <span>Guizhou University · China</span>
    <span>Research portfolio · updated September 2026</span>
  </div>
</section>

<section class="statement" aria-labelledby="statement-title">
  <p class="eyebrow">A working method</p>
  <h2 id="statement-title">Make the interesting claim survive contact with a test.</h2>
  <p>I work across machine learning, distributed training, game engines, and embodied intelligence. The common thread is operational: define the interface, isolate the shortcut, record the failure, and publish the boundary with the result.</p>
</section>

<section class="work" id="work" aria-labelledby="work-title">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Selected work</p>
      <h2 id="work-title">Four projects, one research spine.</h2>
    </div>
    <p class="section-heading__note">Each project is in active development. The status labels describe the evidence that exists today.</p>
  </div>
  <div class="project-list">
    {% for project in site.data.projects %}
    <article class="project-row project-row--{{ project.accent }}">
      <a class="project-row__media" href="/projects/{{ project.id }}/">
        <img src="{{ project.image }}" alt="{{ project.image_alt }}" loading="lazy">
        <span class="project-row__index">{{ project.index }}</span>
      </a>
      <div class="project-row__body">
        <p class="project-row__kicker">{{ project.kicker }}</p>
        <h3><a href="/projects/{{ project.id }}/">{{ project.name }}</a></h3>
        <p>{{ project.description }}</p>
        <div class="project-row__meta"><span>{{ project.status }}</span><span>{{ project.tags }}</span></div>
        <a class="text-link" href="/projects/{{ project.id }}/">Read the case study <span aria-hidden="true">→</span></a>
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section class="principles" aria-labelledby="principles-title">
  <p class="eyebrow">What I care about</p>
  <div class="principles__grid" id="principles-title">
    <div><span>01</span><h3>Interfaces before scale</h3><p>Small, explicit contracts make it possible to tell learning from leakage and a demo from a system.</p></div>
    <div><span>02</span><h3>Failures are data</h3><p>A failed gate narrows the research space. It stays visible instead of becoming a footnote.</p></div>
    <div><span>03</span><h3>Open by construction</h3><p>Code, manifests, checkpoints, and evidence maps should let another person follow the reasoning.</p></div>
  </div>
</section>

<section class="notes" id="notes" aria-labelledby="notes-title">
  <div class="section-heading">
    <div><p class="eyebrow">Notes from the workbench</p><h2 id="notes-title">Short records, open edges.</h2></div>
    <p class="section-heading__note">The blog remains the place for smaller implementation notes and reproducibility updates.</p>
  </div>
  <div class="notes-list">
    {% for post in site.posts limit: 3 %}
    <a class="note-row" href="{{ post.url | relative_url }}"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d %b %Y" }}</time><strong>{{ post.title }}</strong><span aria-hidden="true">→</span></a>
    {% endfor %}
  </div>
</section>

<section class="contact-band" aria-labelledby="contact-title">
  <p class="eyebrow">Start a conversation</p>
  <h2 id="contact-title">Interested in memory, agents, or embodied learning?</h2>
  <a class="button button--solid" href="mailto:xsy1131585528@gmail.com">Email Yuhao <span aria-hidden="true">↗</span></a>
</section>
