import type { ReactNode } from "react";
import Panel from "../Panel/Panel";
import PanelWrapper from "../Panel/PanelWrapper";
import { SectionCardInner } from "./SectionCard.styles";

type SectionCardProps = {
  title: string;
  children?: ReactNode;
};

const SectionCard = ({ title, children }: SectionCardProps) => {
  return (
    <Panel>
      <PanelWrapper>
        <SectionCardInner>
          <b>{title}</b>
          {children}
        </SectionCardInner>
      </PanelWrapper>
    </Panel>
  );
};

export default SectionCard;
