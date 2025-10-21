import { z } from "zod";

export const socialLinksSchema = z.object({
  slug: z.string(),
  name: z.string(),
  url: z.url(),
});

export type SocialLink = z.infer<typeof socialLinksSchema>;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    slug: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/vicainelli",
  },
  {
    slug: "github",
    name: "GitHub",
    url: "https://github.com/vicainelli/",
  },
  {
    slug: "behance",
    name: "Behance",
    url: "https://www.behance.net/viniciuscainelli",
  },
  {
    slug: "codepen",
    name: "CodePen",
    url: "https://codepen.io/vicainelli/",
  },
  {
    slug: "dribbble",
    name: "Dribbble",
    url: "https://dribbble.com/vicainelli",
  },
];
