"use client";

import { useRouter } from "next/navigation";

export default function NameInput() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");

    router.push(`/result/${name}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name in English"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
