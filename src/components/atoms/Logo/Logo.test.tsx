import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import * as stories from "./Logo.stories";

const { Default } = composeStories(stories);

describe("src/components/atoms/Button/Button.test.tsx", () => {
  test("Atomである", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
  test("[role=heading]である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("heading")).toBeInTheDocument();
  });
});
