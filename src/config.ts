import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://your-blog-domain.com/", // Replace with your deployed domain
  author: "Esakki Muthu",
  profile: "https://esakkimuthu-portfolio.vercel.app/",
  desc: "A minimal, responsive, and SEO-friendly Astro blog theme to share learnings and act as a journal.",
  title: "Esakki's Blog",
  ogImage: "esakki-blog-og.jpg", // Replace with your custom OG image
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/EsakkiMuthu-dev/astro-paper/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code
  langTag: ["en-EN"], // BCP 47 Language Tags
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/EsakkiMuthu-dev",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/esakkimuthu-esakki/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:esakkimuthu6842@gmail.com", // Replace with your email
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  }
];
