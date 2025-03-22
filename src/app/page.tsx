import Image from "next/image";

// components
import NameInput from "@/app/components/nameInput";
import NameList from "@/app/components/nameList";
import TotalCount from "@/app/components/totalCount";

// utils
import getNameData from "@/app/utils/getNameData";

export default async function Home() {
  const nameData = await getNameData();

  return (
    <div className="grid grid-rows-[30px_1fr_50px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold">kpop name generator</h1>
      <main>
        <p className="text-center text-base">Annyeonghaseyo! (안녕하세요!)</p>
        <NameInput />
        <TotalCount />
        <NameList data={nameData} />
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
