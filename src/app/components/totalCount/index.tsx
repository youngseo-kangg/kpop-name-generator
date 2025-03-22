import getTotalCount from "@/app/utils/getTotalCount";

export default async function TotalCount() {
  const totalCount = await getTotalCount();

  return (
    <p className="text-center text-xs">Total search count is {totalCount}</p>
  );
}
