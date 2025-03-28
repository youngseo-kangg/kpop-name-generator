import { NameData } from "@/app/types";
import { useMemo } from "react";

type SearchCountProps = {
  data: NameData[];
};

export default function SearchCount({ data }: SearchCountProps) {
  const totalCount = useMemo(() => {
    return data.reduce((acc, cur) => {
      if (Number(cur.count) > 0) {
        return acc + Number(cur.count);
      }
      return acc;
    }, 0);
  }, [data]);

  return (
    <p className="text-center text-xs">Total search count is {totalCount}</p>
  );
}
