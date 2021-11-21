
import NavbarImport from "./componets/NavbarImport.jsx";
import Foot from "./componets/footer.jsx";
import Title from "./componets/title.jsx";
import Aboutme from "./componets/aboutme.jsx";
import Projects from "./componets/projects.jsx";
import Resume from "./componets/resume.jsx";
import Particles from "react-tsparticles";


const HeaderNavBar = () => {
  /*
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
      */
    return (
    <>
        <NavbarImport />
        <Particles params={{
                "interactivity": {
                  "events": {
                    "onClick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "onHover": {
                      "mode": "repulse"
                    }
                  },
                  "modes": {
                    "bubble": {
                      "distance": 400,
                      "duration": 2,
                      "opacity": 0.8,
                      "size": 40
                    },
                    "grab": {
                      "distance": 400
                    },
                    "push": {
                      "groups": [
                        "z5000",
                        "z7500",
                        "z2500",
                        "z1000"
                      ]
                    }
                  }
                },
                "particles": {
                  "color": {
                    "animation": {
                      "h": {
                        "speed": 20
                      }
                    }
                  },
                  "groups": {
                    "z5000": {
                      "number": {
                        "value": 70
                      },
                      "zIndex": {
                        "value": 50
                      }
                    },
                    "z7500": {
                      "number": {
                        "value": 30
                      },
                      "zIndex": {
                        "value": 75
                      }
                    },
                    "z2500": {
                      "number": {
                        "value": 50
                      },
                      "zIndex": {
                        "value": 25
                      }
                    },
                    "z1000": {
                      "number": {
                        "value": 40
                      },
                      "zIndex": {
                        "value": 10
                      }
                    }
                  },
                  "links": {
                    "color": {
                      "value": "#ffffff"
                    },
                    "opacity": 0.4
                  },
                  "move": {
                    "angle": {
                      "value": 10
                    },
                    "attract": {
                      "rotate": {
                        "x": 600,
                        "y": 1200
                      }
                    },
                    "direction": "right",
                    "enable": true,
                    "outModes": {
                      "bottom": "out",
                      "left": "out",
                      "right": "out",
                      "top": "out"
                    },
                    "speed": 5
                  },
                  "number": {
                    "value": 200
                  },
                  "opacity": {
                    "animation": {
                      "speed": 3,
                      "minimumValue": 0.1
                    }
                  },
                  "zIndex": {
                    "value": 5,
                    "opacityRate": 0.5
                  }
                },
                "emitters": {
                  "autoPlay": true,
                  "fill": true,
                  "life": {
                    "wait": false
                  },
                  "rate": {
                    "quantity": 1,
                    "delay": 7
                  },
                  "shape": "square",
                  "startCount": 0,
                  "size": {
                    "mode": "percent",
                    "height": 0,
                    "width": 0
                  },
                  "particles": {
                    "shape": {
                      "type": "images",
                      "options": {
                        "images": [
                          {
                            "src": "https://particles.js.org/images/amongus_blue.png",
                            "width": 205,
                            "height": 267
                          },
                          {
                            "src": "https://particles.js.org/images/amongus_cyan.png",
                            "width": 207,
                            "height": 265
                          },
                          {
                            "src": "https://particles.js.org/images/amongus_green.png",
                            "width": 204,
                            "height": 266
                          },
                          {
                            "src": "https://particles.js.org/images/amongus_lime.png",
                            "width": 206,
                            "height": 267
                          },
                          {
                            "src": "https://particles.js.org/images/amongus_orange.png",
                            "width": 205,
                            "height": 265
                          },
                          {
                            "src": "https://particles.js.org/images/amongus_pink.png",
                            "width": 205,
                            "height": 265
                          },
                          {
                            "src": "https://particles.js.org/images/amongus_red.png",
                            "width": 204,
                            "height": 267
                          },
                          {
                            "src": "https://particles.js.org/images/amongus_white.png",
                            "width": 205,
                            "height": 267
                          }
                        ]
                      }
                    },
                    "size": {
                      "value": 40
                    },
                    "move": {
                      "speed": 10,
                      "outModes": {
                        "default": "none",
                        "right": "destroy"
                      },
                      "straight": true
                    },
                    "zIndex": {
                      "value": 0
                    },
                    "rotate": {
                      "value": {
                        "min": 0,
                        "max": 360
                      },
                      "animation": {
                        "enable": true,
                        "speed": 10,
                        "sync": true
                      }
                    }
                  },
                  "position": {
                    "x": -5,
                    "y": 55
                  }
                }
              }
        } />
    </>
    )
}

function App() {
    return (
        <div id="home">
            <HeaderNavBar />
            <div className="paddingBetween">
                <Title />
            </div>
            <div className="paddingBetween">
                <Aboutme />
            </div>
            <div className="paddingBetween">
                <Projects />
            </div>
                <Resume />
            <Foot />
        </div>
    );
}

export default App;
