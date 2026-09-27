---
layout: project
title: Intelligent Logistics Rover
permalink: /projects/logistics-car/
project_name: Intelligent Logistics Rover
project_kicker: Perception becomes motion
project_summary: A competition-built embodied system combining OpenMV vision, Arduino control, a custom PCB, and a mechanical arm for intelligent logistics handling.
project_status: Built prototype / engineering project
project_accent: coral
project_image: /assets/images/logistics-car/robot-full.jpg
project_image_alt: Arduino logistics rover with vertical arm, gripper, display, and wheels
project_figure_caption: A physical prototype connecting camera perception, embedded control, mechanical handling, and mobile transport.
project_focus: embodied intelligence · robotics · computer vision
project_stack: Arduino Mega2560 · OpenMV · C/C++ · servos · custom PCB · CAD/STL
project_repo_name: 工程实践与创新能力大赛
project_link_label: Competition context
project_link_display: gcxl.edu.cn/new/index.html
project_primary_label: Competition context
project_nav_label: Competition
repository: http://gcxl.edu.cn/new/index.html
---

## A machine that closes the loop

This project was built for an intelligent logistics task: the machine must perceive a work area, move through it, manipulate objects, and complete a transport sequence. The system combines an OpenMV camera, an Arduino controller, a custom expansion board, motorized wheels, and a vertical arm with a gripper.

The engineering value is in the integration boundary. Vision produces a compact signal, the embedded controller converts it into an action sequence, and the chassis and arm make the result observable in the physical world. It is a small but concrete example of embodied intelligence: perception is only useful when it changes what the machine does.

<div class="architecture-strip" aria-label="Logistics rover control loop"><span>OpenMV</span><i>→</i><span>visual cue</span><i>→</i><span>Arduino</span><i>→</i><span>drive + arm</span><i>→</i><span>delivery state</span></div>

## Build evidence

The photographs and engineering artifacts below document the physical system. The full prototype is shown first; the following views make the control board, actuator, PCB, and gripper geometry inspectable.

<div class="project-gallery project-gallery--hardware">
  <figure class="project-gallery__feature"><img src="/assets/images/logistics-car/robot-full.jpg" alt="Full logistics rover with arm, gripper, display, controller, and wheels" loading="lazy"><figcaption><span>Observed build</span>Full rover integration with mobile chassis, arm, controller, and display.</figcaption></figure>
  <figure><img src="/assets/images/logistics-car/control-board.jpg" alt="Arduino controller and expansion board wired into the rover" loading="lazy"><figcaption><span>Observed build</span>Arduino control and wiring integration.</figcaption></figure>
  <figure><img src="/assets/images/logistics-car/actuator.jpg" alt="Servo actuator mounted on the rover arm" loading="lazy"><figcaption><span>Observed build</span>Actuator and arm mechanism.</figcaption></figure>
  <figure><img src="/assets/images/logistics-car/pcb-layout.png" alt="PCB layout for the Arduino Mega2560 expansion board" loading="lazy"><figcaption><span>Engineering artifact</span>Custom expansion-board layout.</figcaption></figure>
  <figure><img src="/assets/images/logistics-car/gripper-cad.png" alt="CAD view of the gripper mechanism" loading="lazy"><figcaption><span>CAD artifact</span>Gripper mechanism design.</figcaption></figure>
  <figure><img src="/assets/images/logistics-car/gripper-assembly.jpg" alt="CAD assembly view of the gripper gears and linkage" loading="lazy"><figcaption><span>CAD artifact</span>Gear and linkage assembly.</figcaption></figure>
</div>

## What I implemented

- **Perception-to-action integration:** OpenMV provides the visual input while the Arduino program coordinates motion and handling decisions.
- **Hardware abstraction at the edge:** A dedicated expansion board organizes motor, servo, serial, and power connections around the Arduino controller.
- **Mechanical embodiment:** CAD-designed parts and actuated joints turn a symbolic target into a grasp-and-transport motion.
- **Debuggable construction:** The project keeps the sketches, STL parts, PCB files, design report, and field media together so the system can be inspected as an engineered artifact.

<div class="project-video-block">
  <div><p class="eyebrow">Field media</p><h3>A physical system is judged by its motion.</h3><p>The short clip is included as an engineering record of the prototype and its integration work.</p></div>
  <video class="project-video" controls preload="metadata" poster="/assets/images/logistics-car/robot-full.jpg"><source src="/assets/images/logistics-car/robot-demo.mp4" type="video/mp4">Your browser does not support the video element.</video>
</div>

## Why it belongs beside NeuralEngine

NeuralEngine studies the boundary from source to simulated behavior. This rover studies the same boundary in hardware: a visual observation becomes a controller decision, then a mechanical consequence. Together they show the direction of my work more clearly than either a software demo or a circuit photo alone: build an interpretable interface, connect it to an environment, and make the result visible.

<div class="evidence-callout"><span class="evidence-callout__label">Portfolio record</span><strong>Embodied intelligence · IoT control · robotics · computer vision · hands-on engineering.</strong><a class="text-link" href="http://gcxl.edu.cn/new/index.html">Competition context →</a></div>
