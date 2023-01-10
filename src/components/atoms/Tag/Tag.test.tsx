import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import * as stories from "./Tag.stories";

const { Default } = composeStories(stories);

describe("src/components/atoms/Tag/Tag.test.tsx", () => {
  test("Atomである", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
  test("role=[listitem] である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("listitem")).toBeInTheDocument();
  });
});
