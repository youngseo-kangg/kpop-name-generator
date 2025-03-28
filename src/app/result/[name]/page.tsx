// utils
import getAllNameData from "../../utils/getAllNameData";

// components
import NameResult from "@/app/result/[name]/components/NameResult";
import NotFound from "@/app/result/[name]/components/NotFound";

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

  return <NameResult data={targetNameData} />;
}
