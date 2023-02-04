import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import Figure from "./Figure";

interface IProps {}

const HomePartners: FunctionComponent<IProps> = ({}) => {
  const arrayOf5 = Array.from({ length: 5 }, (_, i) => i);
  const array = [arrayOf5, arrayOf5, arrayOf5, arrayOf5, arrayOf5];

  const [visibleRow, setVisibleRow] = useState(0);

  const handleRowChange = () => {
    setVisibleRow((prev) => (prev === array.length - 1 ? 0 : prev + 1));
  };

  const delays: string[] = [
    "delay-[150ms]",
    "delay-[300ms]",
    "delay-[450ms]",
    "delay-[600ms]",
    "delay-[750ms]",
    "delay-[900ms]",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleRowChange();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p className="py-12 text-white">row : {visibleRow}</p>
      <Link
        href={
          "https://github.com/Tookai/tailwind/blob/master/src/components/HomePartners.tsx"
        }
        target="_blank"
        className="py-12 text-white hover:underline"
      >
        link to code
      </Link>

      <div
        className={`relative flex h-[180px] w-full flex-col justify-center overflow-hidden`}
      >
        {array.map((items, idx) => (
          <div
            key={idx}
            className={`absolute top-0 right-0 left-0 grid grid-cols-3 flex-col items-center justify-center gap-6 p-4 transition-all duration-500 ease-in-out lg:grid-cols-5 lg:gap-12`}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={`transform transition duration-300 ${
                  idx === visibleRow
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[-100%] opacity-0"
                } flex justify-center ${delays[index] as string} ease-in-out`}
              >
                <Figure key={index} random={(idx + 2) * (index + 1)} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePartners;
