import type { SettingsNavSection } from "./types";

export const settingsNavSections: SettingsNavSection[] = [
  {
    title: "SubTrack",
    links: [
      {
        content: "Payment Methods",
        to: "/app/settings/payment-methods",
      },
      {
        content: "Labels",
        to: "/app/settings/labels",
      },
    ],
  },
  {
    title: "Account",
    links: [
      {
        content: "General",
        to: "/app/settings/general",
      },
      {
        content: "Security",
        to: "/app/settings/security",
      },
      {
        content: "Help",
        to: "/app/settings/help",
      },
    ],
  },
];
