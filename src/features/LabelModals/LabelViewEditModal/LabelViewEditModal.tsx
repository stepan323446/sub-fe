import { Modal, ModalButtons, ModalHeader, ModalItemLabel } from "@/shared/ui";
import { useState } from "react";
import {
  LabelForm,
  useLabel,
  usePatchLabel,
  type LabelRequest,
} from "@/entities/Labels";
import { StyledColorSquare } from "./LabelViewEditModal.styles";
import ModalLabelContainer from "@/entities/Labels/ui/ModalLabelContainer";
import useDeleteLabel from "@/entities/Labels/model/hooks/useDeleteLabel";

type LabelViewEditModalProps = {
  labelId: number;
  onClose?: () => void;
  open: boolean;
};

const LabelViewEditModal = ({
  labelId,
  open,
  onClose = () => {},
}: LabelViewEditModalProps) => {
  const { data: label, isLoading } = useLabel(labelId);
  const [isEdit, setIsEdit] = useState(false);
  const { mutateAsync, isPending } = usePatchLabel();
  const { mutateAsync: deleteMytateAsync, isPending: isPendingDelete } =
    useDeleteLabel();

  const handleCloseModal = () => {
    setIsEdit(false);
    onClose();
  };
  const onLabelSubmit = async (label: LabelRequest) => {
    await mutateAsync({
      id: labelId,
      label: label,
    });
    setIsEdit(false);
  };
  const onLabelDelete = async () => {
    await deleteMytateAsync(labelId);
    handleCloseModal();
  };

  return (
    <Modal open={open} onClose={handleCloseModal} maxWidth={600}>
      <>
        <ModalHeader>{isEdit ? "Edit Label" : "Label Information"}</ModalHeader>
        {!label && <div>no content</div>}

        {!isEdit && (
          <>
            <ModalLabelContainer>
              <ModalItemLabel label="Name" isLoading={isLoading}>
                <b>{label?.name}</b>
              </ModalItemLabel>

              <ModalItemLabel label="Color" isLoading={isLoading}>
                {label && (
                  <>
                    <StyledColorSquare color={label.colorHex} />{" "}
                    <b>{label.colorHex}</b>
                  </>
                )}
              </ModalItemLabel>
            </ModalLabelContainer>

            <ModalButtons
              cancelText="Close"
              onCancel={handleCloseModal}
              acceptText="Edit"
              onAccept={() => setIsEdit(true)}
            />
          </>
        )}
        {isEdit && (
          <LabelForm onLabelSubmit={onLabelSubmit} label={label}>
            <ModalButtons
              onCancel={() => setIsEdit(false)}
              onDelete={() => onLabelDelete()}
              isDeleteLoading={isPendingDelete}
              isLoading={isPending}
              cancelText="Cancel"
              objectName="label"
              acceptText="Change"
            />
          </LabelForm>
        )}
      </>
    </Modal>
  );
};

export default LabelViewEditModal;
