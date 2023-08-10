import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  birthday: Date;
  name: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ birthday, name }) => {
  const [remainingTime, setRemainingTime] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = birthday.getTime() - now.getTime();
      setRemainingTime(timeDifference);
    }, 1000);

    return () => clearInterval(interval);
  }, [birthday]);

  const seconds = Math.floor(remainingTime / 1000) % 60;
  const minutes = Math.floor(remainingTime / 1000 / 60) % 60;
  const hours = Math.floor(remainingTime / 1000 / 60 / 60) % 24;
  const days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);

  return (
    <div>
      <p>EL CUM DE {name}</p>
      <p>Days: {days}</p>
      <p>Hours: {hours}</p>
      <p>Minutes: {minutes}</p>
      <p>Seconds: {seconds}</p>
    </div>
  );
};

export default CountdownTimer;
