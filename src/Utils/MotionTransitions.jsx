export const fadeIn = () =>{
  return {
      hidden: {
          y: -30,
          opacity: 0,
          x:0,
          transition: {
          type: "tween",
          duration: 0.1,
          delay: 0.1,
          ease: [0.25,0.6,0.3,0.8]
          }
      },
      visible:{
          y:0,
          x:0,
          opacity:1,
          transition:{
              type:"tween",
              duration:1.3,
              delay:0.1,
              ease: [.25,0.25,0.25,0.75]
          }
      }
  }


}

export const fadeInFromRight = () => {
  return {
    hidden: {
      x: 80,  // Cambiado de 'y' a 'x'
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.1,
        delay: 0.1,
        ease: [0.55, 0.36, 0.3, 0.8],
      },
    },
    visible: {
      x: 0,  // Cambiado de 'y' a 'x'
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.3,
        delay: 0.1,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const fadeLeft = () => {
  return {
    hidden: {
      x: -80,  // Cambiado de 'y' a '-x'
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: 0.1,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    visible: {
      x: 0,  // Cambiado de 'y' a 'x'
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.3,
        delay: 0.1,
        ease: [0.55, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const fadeUp = () => {
  return {
    hidden: {
      y: -80,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.8,  // Aumentado de 0.1 a 0.8
        delay: 0.1,
        ease: [0.45, 0.10, 0.3, 0.8],
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.5,  // Aumentado de 1.3 a 1.5
        delay: 0.1,
        ease: [0.45, 0.25, 0.25, 0.75],
      },
    },
  };
};


export const fade = () => {
  return {
    hidden: {
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.1,
        delay: 0.1,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 2.3,
        delay: 0.1,
        ease: [0.45, 0.25, 0.25, 0.75],
      },
    },
  };
};
