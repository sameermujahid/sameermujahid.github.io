import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import {
  CouragePage,
  CourageAtmosphere,
  CourageStars,
  CourageGlow,
  CourageContent,
  CourageComposition,
  CourageMark,
  CourageEyebrow,
  CourageTitle,
  CourageStatement,
  CourageLine,
  CourageAccent,
  CourageContinue,
  CourageBackButton,
} from '../styles/styles';


const COURAGE_LINES = [
  'Courage is not the absence of fear,',
  'but the ability to',
  'continue in spite of fear.',
];


const EASE = [0.16, 1, 0.3, 1];


const Courage = () => {
  const navigate = useNavigate();

  const [phase, setPhase] = useState('intro');
  const [visibleLines, setVisibleLines] = useState(0);


  useEffect(() => {
    /*
     * First let "Courage" breathe in the center.
     */

    const moveUp = window.setTimeout(() => {
      setPhase('quote');
    }, 1900);


    /*
     * Slowly reveal each sentence.
     */

    const lineOne = window.setTimeout(() => {
      setVisibleLines(1);
    }, 2350);

    const lineTwo = window.setTimeout(() => {
      setVisibleLines(2);
    }, 3000);

    const lineThree = window.setTimeout(() => {
      setVisibleLines(3);
    }, 3650);


    return () => {
      window.clearTimeout(moveUp);
      window.clearTimeout(lineOne);
      window.clearTimeout(lineTwo);
      window.clearTimeout(lineThree);
    };
  }, []);


  const goHome = () => {
    navigate('/');
  };


  return (
    <CouragePage>

      {/* Ambient background */}
      <CourageAtmosphere />


      {/* Background stars */}
      <CourageStars aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </CourageStars>


      {/* Central glow */}
      <CourageGlow aria-hidden="true" />


      {/* Back button */}
      <CourageBackButton
        type="button"
        onClick={goHome}
        whileHover={{
          x: -4,
        }}
        whileTap={{
          scale: 0.96,
        }}
        transition={{
          duration: 0.45,
          ease: EASE,
        }}
        aria-label="Return to portfolio"
      >
        <span>←</span>
        <span>Back</span>
      </CourageBackButton>


      {/* Full screen centered stage */}
      <CourageContent>

        {/* 
          EVERYTHING lives inside this composition.

          The composition itself moves only 45px upward.
          The title never gets pushed around independently.
        */}
        <motion.div
          initial={{
            y: 0,
          }}
          animate={{
            y: phase === 'intro' ? 0 : -45,
          }}
          transition={{
            duration: 2.2,
            ease: EASE,
          }}
        >

          <CourageComposition>


            {/* Star */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
                rotate: -12,
                y: 8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                y: 0,
              }}
              transition={{
                duration: 1.3,
                ease: EASE,
              }}
            >
              <CourageMark>
                ★
              </CourageMark>
            </motion.div>


            {/* Eyebrow */}
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
                filter: 'blur(4px)',
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
              }}
              transition={{
                delay: 0.3,
                duration: 1.15,
                ease: EASE,
              }}
            >
              <CourageEyebrow>
                A REMINDER
              </CourageEyebrow>
            </motion.div>


            {/* Title */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
                scale: 0.985,
                filter: 'blur(6px)',
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
              }}
              transition={{
                delay: 0.45,
                duration: 1.35,
                ease: EASE,
              }}
            >
              <CourageTitle>
                Courage
              </CourageTitle>
            </motion.div>


            {/* Statement */}
            <CourageStatement>

              {COURAGE_LINES.map((line, index) => {

                const visible = visibleLines > index;

                return (
                  <motion.div
                    key={line}
                    initial={false}
                    animate={{
                      opacity: visible ? 1 : 0,
                      y: visible ? 0 : 12,
                      filter: visible
                        ? 'blur(0px)'
                        : 'blur(5px)',
                    }}
                    transition={{
                      duration: 1.25,
                      ease: EASE,
                    }}
                  >
                    <CourageLine>

                      {index === 2 ? (
                        <>
                          continue{' '}
                          <CourageAccent>
                            in spite of fear.
                          </CourageAccent>
                        </>
                      ) : (
                        line
                      )}

                    </CourageLine>

                  </motion.div>
                );
              })}

            </CourageStatement>


            {/* Keep going */}
            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: visibleLines === 3 ? 1 : 0,
                y: visibleLines === 3 ? 0 : 8,
              }}
              transition={{
                duration: 1.25,
                ease: EASE,
              }}
            >
              <CourageContinue>
                <span />
                <span>KEEP GOING</span>
                <span />
              </CourageContinue>
            </motion.div>


          </CourageComposition>

        </motion.div>

      </CourageContent>

    </CouragePage>
  );
};


export default Courage;
