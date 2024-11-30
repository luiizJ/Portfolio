export const imgAni = {
  initial:{x:100, opacity:0},
  animate:{x:0, opacity:1},
  transition:{duration:1, delay:1.2}
};

export const Container =(delay: number) => ({
  hidden:{x: -100, opacity:0},
  visible:{
    x:0,
    opacity: 1,
    transition:{duration:0.5, delay: delay},
  },
});

export const aboutAni ={
  whileInView: {opacity:1, x:0},
  initial: {opacity:0, x:-100},
  transition: {duration:0.5}
}

export const aboutTextAni ={
  whileInView: {opacity:1, x:0},
  initial: {opacity:0, x:100},
  transition: {duration:0.5}
}

export const headerExperienceAni ={
  whileInView:{opacity:1, y:0},
  initial: {opacity:0, y:-100},
  transition: {duration:0.5}
}

export const containetExperienceAni ={
  whileInView: {opacity:1, x:0},
  initial: {opacity:0, x:-100},
  transition: {duration:1}
}