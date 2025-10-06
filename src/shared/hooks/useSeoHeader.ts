import { useEffect } from "react";

interface useSeoHeaderAttrs {
  title: string;
  description?: string;
  useTitleSuffix?: boolean;
}

const titleSuffix = " - Subtrack";
const descriptionDefault =
  "Subtrack is a convenient app for tracking and managing all your subscriptions in one place.";

const useSeoHeader = ({
  title,
  description = descriptionDefault,
  useTitleSuffix = true,
}: useSeoHeaderAttrs) => {
  useEffect(() => {
    document.title = title;
    if (useTitleSuffix) document.title += titleSuffix;

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) metaDescription.setAttribute("content", description);
  }, [title, description, useTitleSuffix]);
};

export default useSeoHeader;
