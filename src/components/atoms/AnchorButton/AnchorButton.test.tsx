import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import * as stories from "./AnchorButton.stories";

const { Default, Disabled } = composeStories(stories);

describe("src/components/atoms/AnchorButton/AnchorButton.test.tsx", () => {
  test("Atom である", () => {
    const { container } = render(<Default>Button</Default>);
    expect(container).toBeAtom();
  });
  test("[role=button]である", () => {
    const { getByRole } = render(<Default>Button</Default>);
    expect(getByRole("button")).toBeInTheDocument();
  });
  test("[aria-disabled=true]である", () => {
    const { getByRole } = render(<Disabled>Button</Disabled>);
    expect(getByRole("button")).toHaveAttribute("aria-disabled", "true");
  });
});
