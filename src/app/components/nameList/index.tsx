import Link from "next/link";

type NameListProps = {
  data: string[];
};

export default function NameList({ data }: NameListProps) {
  return (
    <div>
      <ul>
        {data.map((el, index) => (
          <li key={`${el}-${index}`}>
            <Link href={`/result/${el}`}>{el}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
