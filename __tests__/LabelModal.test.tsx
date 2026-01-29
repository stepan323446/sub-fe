import { screen } from "@testing-library/react";
import { LabelViewEditModal } from "@/features";
import renderWithProviders from "./utils/renderWithContext";
import * as labelsApi from "@/entities/Labels/api/api";
import { label } from "./mocks/labels";
import userEvent from "@testing-library/user-event";

jest.mock("@/entities/Labels/api/api");
beforeEach(() => {
  (labelsApi.getLabel as jest.Mock).mockResolvedValue(label);
  (labelsApi.patchLabel as jest.Mock).mockResolvedValue(label);
});

it("Display label modal info", async () => {
  renderWithProviders(<LabelViewEditModal open={true} labelId={1} />);

  const element = await screen.findByText(label.name);
  expect(element).toBeInTheDocument();
});

it("Display label modal info", async () => {
  renderWithProviders(<LabelViewEditModal open={true} labelId={1} />);

  const element = await screen.findByText(label.name);
  expect(element).toBeInTheDocument();
});

it("Label modal edit", async () => {
  const user = userEvent.setup();
  renderWithProviders(<LabelViewEditModal open={true} labelId={1} />);

  // Go to edit form
  const editModeBtn = await screen.findByRole("button", { name: "Edit" });
  await user.click(editModeBtn);

  // Save changes
  const confirmEdit = await screen.findByRole("button", { name: "Change" });
  await user.click(confirmEdit);

  expect(labelsApi.patchLabel).toHaveBeenCalled();
});
it("Label modal delete", async () => {
  const user = userEvent.setup();
  renderWithProviders(<LabelViewEditModal open={true} labelId={1} />);

  // Go to edit form
  const editModeBtn = await screen.findByRole("button", { name: "Edit" });
  await user.click(editModeBtn);

  // Delete alert
  const deleteBtn = await screen.findByRole("button", { name: "Delete" });
  await user.click(deleteBtn);

  // Displayed delete alert and confirm it
  const deleteBtnConfirm = await screen.findByTestId("confirm-delete-modal");
  await user.click(deleteBtnConfirm);

  expect(labelsApi.deleteLabel).toHaveBeenCalled();
});
