import type { Label } from "@/entities/Labels";
import { LabelCreateModal, LabelList, LabelViewEditModal } from "@/features";
import { PanelFlex, PanelTitle } from "@/shared/ui";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { useState } from "react";

const LabelDashboard = () => {
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<Label | null>(null);

  const handleOpenViewModal = (label: Label) => {
    setSelectedLabel(label);
    setOpenViewModal(true);
  };

  return (
    <>
      <PanelFlex>
        <PanelTitle>Labels</PanelTitle>
        <Button
          size="small"
          startIcon={<FontAwesomeIcon icon={faPlus} />}
          onClick={() => setOpenCreateModal(true)}
        >
          New Label
        </Button>
      </PanelFlex>
      <LabelList onClickLabel={handleOpenViewModal} />
      {selectedLabel && (
        <LabelViewEditModal
          labelId={selectedLabel.id}
          open={openViewModal}
          onClose={() => setOpenViewModal(false)}
        />
      )}
      {openCreateModal && (
        <LabelCreateModal
          open={openCreateModal}
          onClose={() => setOpenCreateModal(false)}
        />
      )}
    </>
  );
};

export default LabelDashboard;
