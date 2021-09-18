const options = {
    // fullScreen: {
    //     enable: true,
    //     zIndex: -1,
    // },
    background: {
      color: {
        value: "#ffffff",
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 100,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        grab: {
          distance: 100,
        },
      },
    },
    particles: {
      color: {
        value: "#000",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.1,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "bottom",
        enable: true,
        outMode: "out",
        random: false,
        speed: 6,
        straight: false,
        bounce: false,
        attract :{
          enable: false,
          rotateX: 600,
          rotateY: 1200 
        }
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 200,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: "circle",
        // stroke: {
        //   width :0,
        //   color : "#000000",
        // }
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
};
  
export default options;
