import Link from "next/link";
import { useMemo } from "react";

// types
import { NameData } from "@/app/types";

type SearchListProps = {
  data: NameData[];
};

export default function SearchList({ data }: SearchListProps) {
  const filteredData = useMemo(() => {
    return data
      .filter((el) => el.count > 0)
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  }, [data]);

  return (
    <ul className="flex gap-2 flex-wrap justify-center">
      {filteredData.map((el, index) => (
        <li
          key={`${el}-${index}`}
          className="border border-gray-300 hover:border-red-500 rounded-xl"
        >
          <Link
            className="w-full h-full p-2 block"
            href={`/result/${el.name.toLowerCase()}`}
          >
            {el.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
