import { useEffect, useMemo, useState } from "react";

type ExpirationTimerProps = {
  expiresAt: string | number | Date;
};

const formatTime = (ms: number) => {
  if (ms <= 0) {
    return "00:00:00";
  }

  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");
};

const ExpirationTimer = ({ expiresAt }: ExpirationTimerProps) => {
  const targetTime = useMemo(() => new Date(expiresAt).getTime(), [expiresAt]);

  const [timeLeft, setTimeLeft] = useState(() =>
    Math.max(targetTime - Date.now(), 0),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = Math.max(targetTime - Date.now(), 0);
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <div className="bg-red-600 py-1 px-2 rounded-md text-sm text-red-50">
      <div className="flex gap-2 items-center">
        <span>Expires in:</span>
        <span>{formatTime(timeLeft)}</span>
      </div>
    </div>
  );
};

export default ExpirationTimer;
