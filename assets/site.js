(function () {
  "use strict";

  var root = document.body;
  var storedTheme = localStorage.getItem("portfolio-theme");
  if (storedTheme === "dark") root.dataset.theme = "dark";

  document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
    button.addEventListener("click", function () {
      var dark = root.dataset.theme !== "dark";
      if (dark) root.dataset.theme = "dark";
      else delete root.dataset.theme;
      localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    });
  });

  var canvas = document.getElementById("research-network");
  if (!canvas) return;
  var context = canvas.getContext("2d");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var pointer = { x: 0.68, y: 0.42 };
  var nodes = [];
  var frame = 0;

  function resize() {
    var box = canvas.getBoundingClientRect();
    var ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(box.width * ratio));
    canvas.height = Math.max(1, Math.floor(box.height * ratio));
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    nodes = [];
    var count = Math.max(16, Math.floor(box.width / 70));
    for (var i = 0; i < count; i += 1) {
      nodes.push({ x: box.width * (0.46 + Math.random() * 0.5), y: box.height * (0.12 + Math.random() * 0.75), phase: Math.random() * 6.28, color: ["#b8e538", "#ff7f68", "#6da7ff", "#b396ff"][i % 4] });
    }
  }

  function draw() {
    var width = canvas.clientWidth;
    var height = canvas.clientHeight;
    context.clearRect(0, 0, width, height);
    context.lineWidth = 1;
    nodes.forEach(function (node, index) {
      var dx = reduced ? 0 : Math.sin(frame * 0.004 + node.phase) * 4;
      var dy = reduced ? 0 : Math.cos(frame * 0.003 + node.phase) * 4;
      node.drawX = node.x + dx + (pointer.x - 0.68) * 11;
      node.drawY = node.y + dy + (pointer.y - 0.42) * 8;
      for (var j = index + 1; j < nodes.length; j += 1) {
        var other = nodes[j];
        var distance = Math.hypot(node.drawX - (other.drawX || other.x), node.drawY - (other.drawY || other.y));
        if (distance < 145) {
          context.strokeStyle = "rgba(205, 222, 222, " + Math.max(0.04, 0.22 - distance / 900) + ")";
          context.beginPath(); context.moveTo(node.drawX, node.drawY); context.lineTo(other.drawX || other.x, other.drawY || other.y); context.stroke();
        }
      }
    });
    nodes.forEach(function (node) {
      context.fillStyle = node.color;
      context.fillRect(node.drawX - 2, node.drawY - 2, 4, 4);
    });
    if (!reduced) { frame += 1; window.requestAnimationFrame(draw); }
  }

  canvas.addEventListener("pointermove", function (event) {
    var box = canvas.getBoundingClientRect();
    pointer.x = (event.clientX - box.left) / box.width;
    pointer.y = (event.clientY - box.top) / box.height;
  }, { passive: true });
  window.addEventListener("resize", resize, { passive: true });
  resize();
  draw();
}());
