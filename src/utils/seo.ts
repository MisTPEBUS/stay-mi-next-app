import { Metadata } from "next";

type MetadataProps = { title: string; description: string; image?: string; url?: string };

export function generateMetadata({ title, description, image = "/og-image.jpg", url }: MetadataProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [image],
    },
  };
}
