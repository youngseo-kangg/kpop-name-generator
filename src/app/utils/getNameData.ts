"use server";

export default async function getNameData(): Promise<string[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/names/simple`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const jsonResponse = await res.json();
    if ("error" in jsonResponse) {
      throw new Error(jsonResponse.error);
    }
    
    return jsonResponse.data.sort() as string[];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}