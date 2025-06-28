import React, { useEffect, useState } from "react";
import Text from "./Text";

interface CountdownTimerProps {
  valueInSeconds: number;
  className?: string;
  onDone?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  valueInSeconds,
  className,
  onDone = () => {},
}) => {
  const [remainingSeconds, setRemainingSeconds] =
    useState<number>(valueInSeconds);

  useEffect(() => {
    if (remainingSeconds === 0) {
      onDone();
    }
  }, [remainingSeconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number): string => {
    const secondsInMinute = 60;
    const secondsInHour = 60 * secondsInMinute;
    const secondsInDay = 24 * secondsInHour;

    const days = Math.floor(totalSeconds / secondsInDay);
    const hours = Math.floor((totalSeconds % secondsInDay) / secondsInHour);
    const minutes = Math.floor(
      (totalSeconds % secondsInHour) / secondsInMinute
    );
    const seconds = totalSeconds % secondsInMinute;

    const pad = (num: number) => num.toString().padStart(2, "0");

    if (days > 0) {
      return `${days}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    } else if (hours > 0) {
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    } else {
      return `${pad(minutes)}:${pad(seconds)}`;
    }
  };

  return (
    <Text
      size="md"
      className={`text-orange-400 !font-[400] p-1 px-2 bg-white/5 ${className}`}
    >
      {formatTime(remainingSeconds)}
    </Text>
  );
};

export default CountdownTimer;
