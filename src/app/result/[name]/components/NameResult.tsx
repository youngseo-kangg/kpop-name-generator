import { getNameTypeDetails } from "@/app/utils/getNameType";
import { NameData, NameType } from "@/app/types";

interface NameResultProps {
  data: NameData;
}

export default function NameResult({ data }: NameResultProps) {
  const { description, subDescription, emojis } = getNameTypeDetails(
    data.type as NameType
  );
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your name is ...</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">English name is</h2>
          <p className="text-lg">{data.name}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Korean name is</h2>
          <p className="text-lg">{data.kor_name}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">which means ...</h2>
          <p className="text-lg">{data.name_explanation}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            your K-pop idol name is
          </h2>
          <p className="text-lg">{data.kpop_name}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            you as an K-pop idol is likely to be ...
          </h2>
          <p className="text-lg">{description}</p>
          <p className="text-lg">{subDescription.join(", ")}</p>
          <p className="text-lg">{emojis.join(" / ")}</p>
        </div>
      </div>
    </div>
  );
}
