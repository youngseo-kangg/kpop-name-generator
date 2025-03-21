"use server";

export default async function getTotalCount(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/count?total=true`);
    const { data } = await res.json();
 
    return data;
}   