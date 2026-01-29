import { LabelForm, usePostLabel, type LabelRequest } from "@/entities/Labels";
import { Modal, ModalButtons, ModalHeader } from "@/shared/ui";

interface LabelCreateModalProps {
  onClose?: () => void;
  open: boolean;
}

const LabelCreateModal = ({
  open,
  onClose = () => {},
}: LabelCreateModalProps) => {
  const { mutateAsync, isPending } = usePostLabel();

  const handleCloseModal = () => {
    onClose();
  };
  const onLabelSubmit = async (label: LabelRequest) => {
    await mutateAsync({ label });
    handleCloseModal();
  };

  return (
    <Modal open={open} onClose={handleCloseModal} maxWidth={600}>
      <>
        <ModalHeader>Create new label</ModalHeader>
        <LabelForm onLabelSubmit={onLabelSubmit}>
          <ModalButtons
            cancelText="Close"
            onCancel={handleCloseModal}
            isLoading={isPending}
            acceptText="Create"
          />
        </LabelForm>
      </>
    </Modal>
  );
};

export default LabelCreateModal;
