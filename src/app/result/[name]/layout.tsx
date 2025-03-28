import getAllNameData from "@/app/utils/getAllNameData";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ name: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  // Fetch all name data and find the specific name data
  const completeNameData = await getAllNameData();
  const targetNameData = completeNameData.find(
    (data) => data.name.toLowerCase() === name.toLowerCase()
  );

  if (!targetNameData) {
    return {
      title: `${formattedName} | kpop name generator`,
      description: `Discover ${formattedName}'s K-pop idol name`,
      metadataBase: new URL(`http://localhost:3000`),
      openGraph: {
        title: `${formattedName} | kpop name generator`,
        description: `Discover ${formattedName}'s K-pop idol name`,
        type: "website",
        locale: "en_US",
        siteName: "kpop name generator",
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_API_URL}/og_image.png`,
            width: 1200,
            height: 630,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${formattedName} | kpop name generator`,
        description: `Discover ${formattedName}'s K-pop idol name`,
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_API_URL}/og_image.png`,
            width: 1200,
            height: 630,
          },
        ],
      },
    };
  }

  const { kor_name = "", name_explanation } = targetNameData;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("description", kor_name); // description 키와 값이다.
  ogSearchParams.set("name_explanation", name_explanation.toLowerCase()); // description 키와 값이다.

  return {
    title: `${kor_name} | kpop name generator`,
    description: `${formattedName}'s K-pop idol name is ${kor_name}. Find out what kind of K-pop idol you would be!`,
    metadataBase: new URL(apiUrl),
    openGraph: {
      title: `${formattedName} | kpop name generator`,
      description: `${formattedName}'s K-pop idol name is ${kor_name}. Find out what kind of K-pop idol you would be!`,
      type: "website",
      locale: "en_US",
      siteName: "kpop name generator",
      url: `${process.env.NEXT_PUBLIC_API_URL}/result/${name}`,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 250,
          height: 250,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${kor_name} | kpop name generator`,
      description: `${formattedName}'s K-pop idol name is ${kor_name}. Find out what kind of K-pop idol you would be!`,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function NameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
