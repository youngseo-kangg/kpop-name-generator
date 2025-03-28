// utils
import getAllNameData from "./utils/getAllNameData";

// components
import Search from "./components/search";
import SearchInput from "./components/search/SearchInput";

export default async function Home() {
  const allNameData = await getAllNameData();

  return (
    <>
      <p className="text-center text-base">Annyeonghaseyo! (안녕하세요!)</p>
      <SearchInput data={allNameData} />
      <Search data={allNameData} />
    </>
  );
}
