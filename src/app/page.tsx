// components
import Search from "./components/search";

// utils
import getAllNameData from "./utils/getAllNameData";

export const dynamic = "force-dynamic";
export default async function Home() {
  const nameData = await getAllNameData();

  return (
    <>
      <p className="text-center text-base">Annyeonghaseyo! (안녕하세요!)</p>
      <Search data={nameData} />
    </>
  );
}
