export default {
  mounted(el, binding) {
    // check if not IE11 -> returns IE version or undefined
    if (!window.document.documentMode) {
      let index = binding.value.index + 1 || 1;
      let nestedIndex = binding.value.nestedIndex + 1 || 1;
      let wait = binding.value.wait || 0;
      let delay = binding.value.delay || 0;
      let duration = binding.value.duration || 1000;
      let translate = binding.value.translate || 50;
      let animation = binding.value.animation || "default";
      // let trigger = binding.value.trigger || false;
      // let triggerId = binding.value.triggerId || null;

      // BEFORE
      switch (binding.arg) {
        case "top":
          el.style.transform = "translate(0, -" + translate + "px)";
          break;
        case "right":
          el.style.transform = "translate(" + translate + "px, 0)";
          break;
        case "bottom":
          el.style.transform = "translate(0, " + translate + "px)";
          break;
        case "left":
          el.style.transform = "translate(-" + translate + "px, 0)";
          break;
        default:
          el.style.transform = "initial";
          break;
      }

      let bezier;
      if (animation === "default") {
        bezier = "cubic-bezier(.17,.67,.25,1)";
      } else if (animation === "brake") {
        bezier = "cubic-bezier(0, 0.67, 0.32, 1)"; // fast in, slow out
      } else if (animation === "overshoot") {
        bezier = "cubic-bezier(0.175, 0.885, 0.32, 1.275)"; // Leichter Overshoot
      } else if (animation === "snap") {
        bezier = "cubic-bezier(1, 0, 0.67, 1)"; // slow in, fast out
      } else {
        bezier = "cubic-bezier(.17,.67,.25,1)";
      }

      el.style.opacity = 0;

      // AFTER
      const handler = function (el) {
        // console.log("In Viewport", el);
        // Opacity
        let transitions =
          "opacity " +
          duration +
          "ms " +
          bezier +
          " " +
          (wait + delay * index * nestedIndex) +
          "ms";
        // + Transform
        transitions +=
          ", transform " +
          duration +
          "ms " +
          bezier +
          " " +
          (wait + delay * index * nestedIndex) +
          "ms";

        el.style.transition = transitions;

        getComputedStyle(el);

        // End of Animation
        setTimeout(() => {
          el.style.opacity = 1;
          el.style.transform = "initial";
        });
      };

      // INTERSECTION OBSERVER
      const animatedScrollObserver = new IntersectionObserver(
        (entries, animatedScrollObserver) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // console.log(entry.target);
              handler(entry.target);
              animatedScrollObserver.unobserve(entry.target);
            }
          });
        }
      );
      animatedScrollObserver.observe(el);
    }
  },
};
