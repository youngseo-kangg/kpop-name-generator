// utils
import getAllNameData from "@/app/utils/getAllNameData";
import incrementNameCount from "@/app/utils/incrementNameCount";

// components
import NameResult from "./components/NameResult";
import NotFound from "./components/NotFound";

export default async function Result({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const targetName = (await params).name;
  const completeNameData = await getAllNameData();
  const targetNameData = completeNameData.find(
    (name) => name.name.toLowerCase() === targetName.toLowerCase()
  );

  if (!targetNameData) {
    return <NotFound name={targetName} />;
  }

  await incrementNameCount(targetNameData.name);
  return <NameResult data={targetNameData} />;
}

// export async function generateStaticParams() {
//   const allNameData = await getAllNameData();

//   return allNameData.map((data) => ({
//     name: data.name,
//   }));
// }
