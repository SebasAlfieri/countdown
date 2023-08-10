import React from 'react';
import { motion } from 'framer-motion';
import s from './ResultContainer.module.css';
import { Testing } from '@/components';

const ResultContainer = () => {
  const targetDate = new Date(2023, 8, 31, 0, 0, 0);
  return (
    <motion.div className={s.container}>
      <motion.div className={s.container}>
        <Testing birthday={targetDate} name={'laucha'} />
      </motion.div>
    </motion.div>
  );
};

export default ResultContainer;
