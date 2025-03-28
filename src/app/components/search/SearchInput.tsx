"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Link from "next/link";

// components
import NameCard from "../nameCard";
import SubmitButton from "./SubmitButton";

// types
import { NameData } from "@/app/types";

type SearchInputProps = {
  data: NameData[];
};

export default function SearchInput({ data }: SearchInputProps) {
  const router = useRouter();
  const [input, setInput] = useState("");

  const nameSuggestions = useMemo(() => {
    return input
      ? data
          .filter((el) => el.name.includes(input)) // 해당 이름을 포함했는지
          .sort((a, b) => b.count - a.count) // 내림차순
          .slice(0, 5) // 상위 5개
      : [];
  }, [data, input]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;

    if (name) router.push(`/result/${name.toLowerCase()}`);
  };

  const handleInputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setInput(value);

  const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    const ele = e.currentTarget;
    const pos = { left: ele.scrollLeft, x: e.clientX };

    const mouseMoveHandler = (e: MouseEvent) => {
      const dx = e.clientX - pos.x;
      ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  return (
    <NameCard language="en" color="red">
      <div className="flex flex-col gap-3 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex justify-between items-center gap-4 w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="mx-4 py-2 border-b-0 focus:border-b focus:border-gray-300 border-transparent outline-none transition-all"
            onChange={handleInputChange}
            value={input}
            pattern="[A-Za-z]+"
            title="English letters only"
          />
          <SubmitButton
            inputAvailable={input && /^[a-zA-Z]*$/.test(input) ? true : false}
          />
        </form>
        {input &&
          (/^[a-zA-Z]*$/.test(input) ? (
            <div className="relative w-[calc(100%-1.875rem)] ml-4 mr-4 overflow-hidden">
              <ul
                className="w-full flex gap-2 overflow-x-scroll overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing touch-pan-x"
                onMouseDown={(e) => handleMouseDown(e)}
              >
                {nameSuggestions.map((el) => (
                  <li key={el.name} className="text-xs shrink-0">
                    <Link
                      href={`/result/${el.name.toLowerCase()}`}
                      tabIndex={0}
                      className="text-xs hover:text-red-500 focus:text-red-500 focus:outline-none border border-gray-300 rounded-xl p-2 block"
                      draggable={false}
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-sm ml-4 mr-4">English letters only</p>
          ))}
      </div>
    </NameCard>
  );
}
