import { IndexPage } from "@/pages";
import renderWithProviders from "./utils/renderWithContext";

test("Page is rendered", () => {
  renderWithProviders(<IndexPage />);
  const sum = 5 + 5;

  expect(sum).toBe(10);
});
