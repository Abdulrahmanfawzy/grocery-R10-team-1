import { useCallback, useEffect, useMemo, useState } from "react";

const TimeBox = ({ value }: { value: number }) => {
    const formatted = value.toString().padStart(2, "0");
    return (
        <div className="flex gap-1">
            {formatted.split("").map((digit, i) => (
                <div
                    key={i}
                    className="w-7 h-10 bg-[#FFFFFF] text-[#000000] flex items-center justify-center rounded-[12px] font-semibold shadow"
                >
                    {digit}
                </div>
            ))}
        </div>
    );
};

const WinterDiscount = () => {
    const targetDate = useMemo(() => {
        const date = new Date();
        date.setDate(date.getDate() + 2);
        return date;
    }, []);

    const calculateTimeLeft = useCallback(() => {
        const difference = targetDate.getTime() - new Date().getTime();

        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    return (
        <section className="w-full bg-[#014162E5] py-16 border-4 border-secondary flex rounded-xl mx-auto my-10">

            <div className="max-w-4xl mx-auto text-center text-white space-y-6">

                <h2 className="text-4xl font-display "><span className="text-[#000000]">Winter</span> Discount</h2>

                <p className="text-lg text-[#000000] font-body opacity-90">
                    Get 60% off - Limited Time Offer
                </p>

                <div className="flex justify-center items-center gap-6 font-body ">
                    <div className="flex flex-col items-center  gap-2">
                        <TimeBox value={timeLeft.days} />
                        <span>Days</span>
                    </div>

                    <span className="text-2xl  text-[#000000]">:</span>

                    <div className="flex flex-col items-center gap-2">
                        <TimeBox value={timeLeft.hours} />
                        <span>Hours</span>
                    </div>

                    <span className="text-2xl text-[#000000]">:</span>

                    <div className="flex flex-col items-center gap-2">
                        <TimeBox value={timeLeft.minutes} />
                        <span>Minutes</span>
                    </div>

                    <span className="text-2xl text-[#000000]">:</span>

                    <div className="flex flex-col items-center gap-2">
                        <TimeBox value={timeLeft.seconds} />
                        <span>Seconds</span>
                    </div>
                </div>

                <button className="mt-6 px-3 py-2 bg-[#014162] text-[#F8F8F8] font-body font-semibold rounded-[8px] hover:opacity-90 transition-opacity">
                    Shop now &nbsp; &gt;
                </button>
            </div>
        </section>
    );
};

export default WinterDiscount;
