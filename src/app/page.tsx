import Image from "next/image";

// utils
import getAllNameData from "./utils/getAllNameData";
import Search from "./components/search";
import SearchInput from "./components/search/SearchInput";

export default async function Home() {
  const allNameData = await getAllNameData();

  return (
    <div className="grid grid-rows-[30px_1fr_50px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl sm:text-4xl font-bold text-center pt-4">
        kpop name generator
      </h1>
      <main>
        <p className="text-center text-base">Annyeonghaseyo! (안녕하세요!)</p>
        <SearchInput data={allNameData} />
        <Search data={allNameData} />
      </main>
      <footer className="flex flex-col items-center justify-center text-sm">
        <p>© 2025 Youngseo Kang. All rights reserved.</p>
        <p>youngseo.kangg@gmail.com</p>
        <div>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-sm"
            href="https://github.com/youngseo-kangg/kpop-name-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to Developer's GitHub →
          </a>
        </div>
      </footer>
    </div>
  );
}
