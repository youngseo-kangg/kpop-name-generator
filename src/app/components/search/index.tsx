import { useMemo } from "react";
import Link from "next/link";

// types
import { NameData } from "@/app/types";

interface SearchProps {
  data: NameData[];
}

function Search({ data }: SearchProps) {
  const totalCount = useMemo(() => {
    return data.reduce((acc, cur) => {
      if (Number(cur.count) > 0) {
        return acc + Number(cur.count);
      }
      return acc;
    }, 0);
  }, [data]);

  const filteredData = useMemo(() => {
    return data
      .filter((el) => el.count > 0)
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  }, [data]);

  return (
    <>
      <p className="text-center text-xs">Total search count is {totalCount}</p>
      <div className="pt-10 flex flex-col gap-2">
        <p className="text-center text-base">
          Is your name, by any chance, is ...
        </p>
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
      </div>
    </>
  );
}

export default Search;
