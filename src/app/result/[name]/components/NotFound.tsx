import Link from "next/link";

interface NotFoundProps {
  name: string;
}

export default function NotFound({ name }: NotFoundProps) {
  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">{name} is not yet in the list</h1>
      <div className="flex flex-col gap-2 text-sm text-left mb-4">
        <p>We couldn't find any information about {name} in our database.</p>
        <p>1. It might be a new entry or hasn't been added yet.</p>
        <p>
          2. There might be a typo, or the name could have different spelling
          variations (e.g., "John" vs. "Jon")
        </p>
        <p>
          3. Nickname Instead of Full Name – The name might be a nickname rather
          than the official full name (e.g., "Mike" instead of "Michael")
        </p>
        <p>
          4. Foreign Name in English Spelling – The name could be from another
          language and written in English as-is (e.g., "Takahiro").
        </p>
        <p>
          We're constantly updating our data, so it might be available soon! 🚀
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Link
          href="/"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Try searching with a different name. 😊
        </Link>
        <Link
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
          href={`mailto:youngseo.kangg@gmail.com?subject=Kpop Name Generator - name '${name}' suggestion`}
        >
          Or let the developer know!
        </Link>
      </div>
    </div>
  );
}
