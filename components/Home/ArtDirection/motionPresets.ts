export const createFloatLoop = ({
  distance = 4,
  duration = 3.6,
  delay = 0,
  rotate = [0, 0, 0] as number[],
}) => ({
  animate: {
    y: [0, -distance, 0],
    rotate,
  },
  transition: {
    duration,
    delay,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
});

export const createSparkleLoop = ({ duration = 2.7, delay = 0 } = {}) => ({
  animate: {
    scale: [1, 1.16, 1],
    opacity: [0.72, 1, 0.72],
  },
  transition: {
    duration,
    delay,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
});

export const stickerHover = {
  whileHover: { y: -5, rotate: 0 },
  transition: { duration: 0.2 },
};

export const stickerPopIn = {
  initial: { opacity: 0, scale: 0.94, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] as const },
};
