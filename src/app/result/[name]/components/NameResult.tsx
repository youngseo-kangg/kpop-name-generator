import Link from "next/link";
import Image from "next/image";

// components
import NameCard from "@/app/components/nameCard";

// types
import { NameData, NameType } from "@/app/types";

// utils
import { getNameTypeDetails } from "@/app/utils/getNameType";

interface NameResultProps {
  data: NameData;
}

export default async function NameResult({ data }: NameResultProps) {
  const {
    description,
    subDescription,
    emojis: [firstEmoji, secondEmoji, thirdEmoji],
  } = getNameTypeDetails(data.type as NameType);

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="flex flex-col items-center justify-center">
        <div>
          <Image
            src={`/type_${data.type}_${data.gender}.png`}
            alt="kpop logo"
            width={250}
            height={250}
            className="mx-auto block w-full min-[340px]:w-[250px] min-[340px]:h-[250px]"
          />
        </div>
      </div>
      <NameCard size="md" language="ko" color="blue">
        <p className="text-lg">{data.kor_name}</p>
      </NameCard>
      <div className="space-y-2 px-0 pb-5 min-[340px]:px-2">
        <p>... which means {data.name_explanation.toLowerCase()}</p>
        <p>you're more likely to be {description.toLowerCase()}.</p>
        <p>
          you're also likely to be{" "}
          {subDescription.map((desc) => desc.toLowerCase()).join(", ")}.
        </p>
        <p className="text-5xl">
          <span>{firstEmoji}</span> <span>{secondEmoji}</span>{" "}
          <span>{thirdEmoji}</span>
        </p>
      </div>
      <div className="flex gap-2 flex-col items-center justify-center">
        <Link
          href="/"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go back and try with different name
        </Link>
        <p className="text-xs">
          {data.count + 1} people have searched for this name.
        </p>
      </div>
    </div>
  );
}
