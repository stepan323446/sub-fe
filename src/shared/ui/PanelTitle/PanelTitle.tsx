import type { OnlyChildrenProps } from "@/shared/types/OnlyChildrenProps";

const PanelTitle = ({ children }: OnlyChildrenProps) => {
  return <h3>{children}</h3>;
};

export default PanelTitle;
