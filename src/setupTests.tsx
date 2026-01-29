import "@testing-library/jest-dom";

jest.mock("mui-color-input", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  MuiColorInput: (props: any) => <input data-testid="color-input" {...props} />,
}));
