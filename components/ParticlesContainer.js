import {Particles} from 'react-tsparticles'
import { loadFull } from 'tsparticles';
import React, {useCallback} from 'react';
const ParticlesContainer = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoad = useCallback(async () => {}, []);
  return (
    <Particles 
      className='absolute h-[85vh] xl:h-[90vh] translate-z-0'
      id='tsparticles' 
      init={particlesInit} 
      loaded={particlesLoad}
      options={{
        fullScreen: {enable: false},
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4 
            },
            repulse: {
              distante: 300,
              duration: 0.6,
            }
          }
        },
        particles: {
          color: {
            calue: '#D62976',
          },
          links: {
            color: "#929292",
            distance: 200,
            enable: true,
            opacity: 0.4,
            width: 0.7
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 90
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 7 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
