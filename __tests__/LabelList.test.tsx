import { screen } from "@testing-library/react";
import { LabelList } from "@/features";
import renderWithProviders from "./utils/renderWithContext";
import * as labelsApi from "@/entities/Labels/api/api";
import { labels } from "./mocks/labels";

jest.mock("@/entities/Labels/api/api");
beforeEach(() => {
  (labelsApi.getLabels as jest.Mock).mockResolvedValue(labels);
});

it("Display label list items", async () => {
  renderWithProviders(<LabelList />);
  const firstElem = labels.results[0];

  const element = await screen.findByText(firstElem.name);
  expect(element).toBeInTheDocument();
});
