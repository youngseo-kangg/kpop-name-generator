import Link from "next/link";

type NameListProps = {
  data: string[];
};

export default function NameList({ data }: NameListProps) {
  return (
    <div>
      <p className="text-center text-base p-2">
        Is your name, by any chance, is ...
      </p>
      <ul className="flex gap-2 flex-wrap justify-center">
        {data.map((el, index) => (
          <li
            key={`${el}-${index}`}
            className="border border-gray-300 hover:border-red-500 rounded-xl"
          >
            <Link className="w-full h-full p-2 block" href={`/result/${el}`}>
              {el}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
