import {
  faEnvelope,
  faListCheck,
  faLocationPin,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import type { AnswerInfo } from "../ui/AnswerBlock/AnswerBlock";

export const answers: AnswerInfo[] = [
  {
    background: "#FFFBBC",
    icon: faLocationPin,
    title: "All Your Subscriptions in One Place",
    content:
      "No need to check multiple accounts or emails. See all your active subscriptions, renewal dates, and costs conveniently organized in one easy-to-use dashboard.",
  },
  {
    background: "#BCFFF4",
    icon: faEnvelope,
    title: "Never Miss a Payment",
    content:
      "Get timely notifications before any payment is due. Avoid late fees and unwanted interruptions by staying ahead of your subscription renewals.",
  },
  {
    background: "#FFBCFC",
    icon: faListCheck,
    title: "Save Money by Managing Subscriptions",
    content:
      "Identify unused or duplicate subscriptions and cancel them effortlessly. Take control of your spending and keep your finances healthy.",
  },
  {
    background: "#BCE1FF",
    icon: faPlay,
    title: "Get Started in Seconds",
    content:
      "Sign up quickly with minimal steps, connect your accounts or enter your subscriptions manually, and start managing right away — no complicated setup needed.",
  },
];
