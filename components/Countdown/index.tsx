import { useState, useEffect } from 'react';
import Image from 'next/image';
import s from './Countdown.module.css';

interface CountdownProps {
  targetDay: number;
  targetMonth: number;
  name: string;
  img?: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDay, targetMonth, name, img }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const targetDate = new Date(currentYear, targetMonth - 1, targetDay); // Months are 0-indexed

      if (now > targetDate) {
        targetDate.setFullYear(currentYear + 1);
      }

      const timeDifference = targetDate.getTime() - now.getTime();
      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      setTimeLeft({
        days: days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
      });
    };

    const interval = setInterval(calculateTimeLeft, 1000);

    calculateTimeLeft();

    return () => clearInterval(interval);
  }, [targetDay, targetMonth]);

  return (
    <div className={s.container}>
      <div className={s.container__text}>
        <h2>{name}</h2>
        <p>{timeLeft.days} days</p>
        <p>{timeLeft.hours} hours</p>
        <p>{timeLeft.minutes} minutes</p>
        <p>{timeLeft.seconds} seconds</p>
      </div>
      {img && (
        <Image src={img} width={300} height={300} alt="background" className={s.container__bg} />
      )}
    </div>
  );
};

export default Countdown;
