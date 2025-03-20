import getAllNameData from "../../utils/getNameData";
import NameResult from "@/app/components/result/NameResult";
import NotFound from "@/app/components/result/NotFound";

export default async function Result({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const targetName = (await params).name;
  const nameData = await getAllNameData();
  const targetNameData = nameData.find((name) => name.name === targetName);

  if (!targetNameData) {
    return <NotFound name={targetName} />;
  }

  return <NameResult data={targetNameData} />;
}
