import { type Variants } from "motion";

export const animContainer: Variants = {
  hidden: {opacity: 1},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      ease: "easeInOut"
    },
  },
};

export const popUp: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
    rotateX: -10,
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
      stiffness: 100,
    },
  },
};

export const mainBlur: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
    rotateX: -10,
    filter: "blur(5px)",
  },
  show: {
    y: 0,
    filter: "blur(0)",
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.9,
      ease: "easeInOut",
      stiffness: 100,
    },
  },
};
