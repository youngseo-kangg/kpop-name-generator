import { PropsWithChildren } from "react";

type CardSize = "lg" | "md";

const bgColorMap = {
  red: "bg-red-500",
  blue: "bg-blue-500",
} as const;

const cardStyles = {
  lg: {
    container: "h-[229px] w-19",
    mainText: "text-4xl",
    subText: "text-lg",
  },
  md: {
    container: "h-[160px] w-16",
    mainText: "text-2xl",
    subText: "text-base",
  },
} as const;

interface NameCardProps extends PropsWithChildren {
  language: "ko" | "en";
  color?: "red" | "blue";
  size?: CardSize;
}

export default function NameCard({
  language = "en",
  color = "red",
  size = "lg",
  children,
}: NameCardProps) {
  const { greeting, intro } = getGreetingAndIntro(language);
  const styles = cardStyles[size];

  return (
    <article className="flex flex-col items-center justify-center pt-3 pb-2 w-full">
      <div
        className={`flex flex-col items-center justify-between w-full min-[300px]:w-[270px] ${styles.container}`}
      >
        <div className={`w-full h-20 p-2 ${bgColorMap[color]} rounded-t-2xl`}>
          <p className={`text-center font-bold text-white ${styles.mainText}`}>
            {greeting}
          </p>
          <p className={`text-center text-white ${styles.subText}`}>{intro}</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-white w-full h-full rounded-b-2xl shadow-lg">
          {children}
        </div>
      </div>
    </article>
  );
}

function getGreetingAndIntro(language: "ko" | "en") {
  if (language === "ko") {
    return { greeting: "안녕하세요", intro: "저의 이름은" };
  }
  return { greeting: "HELLO", intro: "my name is" };
}
