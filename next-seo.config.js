import metadata from "@/data/metadata";

const SEO = {
  titleTemplate: "국민주권당 - %s",
  defaultTitle: metadata.meta.title,
  description: metadata.meta.description,
  canonical: metadata.meta.url,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: metadata.meta.url,
    site_name: metadata.meta.title,
    images: [
      {
        url: `${metadata.meta.url}/imgs/landing1stImage.png`,
        width: 850,
        height: 650,
        alt: `jugwon.kr`,
      },
    ],
  },
};

export default SEO;
