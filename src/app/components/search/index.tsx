// components
import { NameData } from "@/app/types";

// components
import SearchCount from "./SearchCount";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";

type SearchProps = {
  data: NameData[];
};

export default function Search({ data }: SearchProps) {
  return (
    <>
      <SearchInput data={data} />
      <SearchCount data={data} />
      <div className="pt-10 flex flex-col gap-2">
        <p className="text-center text-base">
          Is your name, by any chance, is ...
        </p>
        <SearchList data={data} />
      </div>
    </>
  );
}
