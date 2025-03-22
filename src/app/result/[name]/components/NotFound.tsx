import Link from "next/link";

interface NotFoundProps {
  name: string;
}

export default function NotFound({ name }: NotFoundProps) {
  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">{name} is not yet in the list</h1>
      <p className="text-lg text-gray-600 mb-6">Maybe that's because ...</p>
      <p className="text-lg text-gray-600 mb-6">We are working on it!</p>
      <Link
        href="/"
        className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Try with different name
      </Link>
      {/* <button onClick={() => console.log("clicked, modal needed")}>
        Or let the developer know!
      </button> */}
    </div>
  );
}
