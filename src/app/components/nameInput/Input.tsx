"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Input() {
  const router = useRouter();
  const [hasText, setHasText] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;

    if (name) router.push(`/result/${name.toLowerCase()}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasText(e.target.value.length > 0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center gap-2 w-full"
    >
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        className="mx-4 py-2 border-b-0 focus:border-b focus:border-gray-300 border-transparent outline-none transition-all"
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className={`${
          hasText ? "text-red-500 hover:text-red-600" : "text-gray-300"
        } transition-colors`}
        aria-label="Submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </form>
  );
}
