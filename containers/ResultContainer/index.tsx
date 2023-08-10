import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import s from './ResultContainer.module.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Countdown } from '@/components';

import { dataset } from '@/lib/dataset';

const SlideButton = () => {
  const swiper = useSwiper();

  return (
    <div className={s.buttons_container}>
      <motion.button
        onClick={() => swiper.slidePrev()}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.15 }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1 }}
        whileInView={{
          scale: [0.98, 1, 1],
          rotateZ: [-5, 5, -5],
          transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            duration: 2
          }
        }}>
        {'<'}
      </motion.button>
      <motion.button
        onClick={() => swiper.slideNext()}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.15 }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1 }}
        whileInView={{
          scale: [0.98, 1, 1],
          rotateZ: [5, -5, 5],
          transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            duration: 2
          }
        }}>
        {'>'}
      </motion.button>
    </div>
  );
};

const ResultContainer = () => {
  const sortedPeople = dataset.people
    .map((item) => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const targetDate = new Date(currentYear, item.month - 1, item.day); // Months are 0-indexed

      if (now > targetDate) {
        targetDate.setFullYear(currentYear + 1);
      }

      const timeDifference = targetDate.getTime() - now.getTime();
      const seconds = Math.floor(timeDifference / 1000);
      const days = Math.floor(seconds / 86400);

      // Calcular animationSpeed en función de timeLeft
      let animationSpeed = 5; // Valor predeterminado

      if (days === 0) {
        animationSpeed = 0.1;
      } else if (days >= 1 && days <= 3) {
        animationSpeed = 0.4;
      } else if (days >= 4 && days <= 10) {
        animationSpeed = 10;
      }

      return {
        ...item,
        timeLeft: seconds,
        animationSpeed: animationSpeed
      };
    })
    .sort((a, b) => a.timeLeft - b.timeLeft);
  return (
    <motion.div className={s.container}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.5, type: 'spring', bounce: 0.6 } }}>
        <Swiper className={s.container__swiper} loop>
          <SlideButton />
          {sortedPeople.map((item) => (
            <SwiperSlide key={item.name}>
              <motion.div
                className={s.container__swiper__slide}
                animate={{
                  scale: [0.98, 1],
                  transition: {
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    duration: item.animationSpeed
                  }
                }}>
                <Countdown
                  targetDay={item.day}
                  targetMonth={item.month}
                  name={item.name}
                  img={item.img}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default ResultContainer;
