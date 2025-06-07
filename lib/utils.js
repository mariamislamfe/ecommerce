import party from "party-js";

export const runCelebration = (targetElement = document.body) => {
  party.confetti(targetElement, {
    count: party.variation.range(20, 30),
    size: party.variation.range(0.8, 1.2),
    spread: 10,
    shapes: ["circle", "square"],
    gravity: 0.4
  });

  setTimeout(() => {
    party.sparkles(targetElement, {
      count: 10,
      size: 1,
      speed: 20
    });
  }, 500);
};