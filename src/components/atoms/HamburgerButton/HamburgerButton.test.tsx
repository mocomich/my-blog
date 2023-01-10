import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import * as stories from "./HamburgerButton.stories";

const { Default } = composeStories(stories);

describe("src/components/Organisms/HamburgerButton/HamburgerButton.test.tsx", () => {
  test("Organismsであること", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
  test("[role=button]である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("button")).toBeInTheDocument();
  });
});
