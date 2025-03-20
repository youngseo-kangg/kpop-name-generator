interface NameData {
  name: string;
  kor_name: string;
  name_explanation: string;
  kpop_name: string;
}

interface NameResultProps {
  data: NameData;
}

export default function NameResult({ data }: NameResultProps) {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">생성된 이름</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">영문 이름</h2>
          <p className="text-lg">{data.name}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">한글 이름</h2>
          <p className="text-lg">{data.kor_name}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">이름 설명</h2>
          <p className="text-lg">{data.name_explanation}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">K-pop 스타일 이름</h2>
          <p className="text-lg">{data.kpop_name}</p>
        </div>
      </div>
    </div>
  );
}
