import type { Metadata } from "next";

type Props = {
  params: { name: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = params.name;
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    title: `${formattedName} | kpop name generator`,
    description: `Discover your K-pop idol name: ${formattedName}. Find out what kind of K-pop idol you would be!`,
    openGraph: {
      title: `${formattedName} | kpop name generator`,
      description: `Discover your K-pop idol name: ${formattedName}. Find out what kind of K-pop idol you would be!`,
      type: "website",
      locale: "en_US",
      siteName: "kpop name generator",
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedName} | kpop name generator`,
      description: `Discover your K-pop idol name: ${formattedName}. Find out what kind of K-pop idol you would be!`,
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
