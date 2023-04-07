export const fadeIn = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 }
};

export const fadeInOut = {
  initial: { scale: 2, opacity: 0, transition: { type: 'spring', stiffness: 170, damping: 21 } },
  animate: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 170, damping: 21 } },
  exit: { scale: 0, y: -200, opacity: 0, transition: { type: 'just', duration: 0.28 } }
};
