import { Button, Typography } from "@mui/material";
import { StyledButtonContainer } from "./ModalButtons.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "../Modal/Modal";
import ModalHeader from "../ModalHeader/ModalHeader";

interface ModalButtonsProps {
  onCancel: () => void;
  onAccept?: () => void;
  onDelete?: () => void;
  objectName?: string;
  isLoading?: boolean;
  isDeleteLoading?: boolean;
  cancelText?: string;
  acceptText?: string;
}

const ModalButtons = ({
  onCancel,
  onDelete,
  onAccept = () => {},
  objectName = "object",
  isLoading = false,
  isDeleteLoading = false,
  acceptText = "Submit",
  cancelText = "Cancel",
}: ModalButtonsProps) => {
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);

  const closeDeleteModal = () => {
    setVisibleDeleteModal(false);
  };

  return (
    <StyledButtonContainer>
      <Button onClick={() => onCancel()} type="button" variant="outlined">
        {cancelText}
      </Button>

      {onDelete && (
        <Button
          onClick={() => setVisibleDeleteModal(true)}
          type="button"
          variant="outlined"
          color="error"
          loading={isDeleteLoading}
          startIcon={<FontAwesomeIcon icon={faTrashCan} />}
        >
          Delete
        </Button>
      )}

      <Button
        onClick={() => onAccept()}
        type="submit"
        variant="contained"
        loading={isLoading}
      >
        {acceptText}
      </Button>

      {onDelete && (
        <Modal
          open={visibleDeleteModal}
          onClose={closeDeleteModal}
          maxWidth={400}
        >
          <>
            <ModalHeader>Alert</ModalHeader>
            <Typography>
              Are you sure that you want to delete {objectName}?
            </Typography>
            <StyledButtonContainer>
              <Button
                onClick={closeDeleteModal}
                type="button"
                variant="outlined"
                disabled={isDeleteLoading}
              >
                Cancel
              </Button>

              <Button
                onClick={() => onDelete()}
                variant="contained"
                color="error"
                loading={isDeleteLoading}
                data-testid="confirm-delete-modal"
              >
                Delete
              </Button>
            </StyledButtonContainer>
          </>
        </Modal>
      )}
    </StyledButtonContainer>
  );
};

export default ModalButtons;
