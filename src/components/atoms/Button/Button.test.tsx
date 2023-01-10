import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import * as stories from "./Button.stories";

const { Default, Disabled } = composeStories(stories);

describe("src/components/atoms/Button/Button.test.tsx", () => {
  const options = { name: "Button" };
  test("Atomである", () => {
    const { container } = render(<Default>Button</Default>);
    expect(container).toBeAtom();
  });
  test("[role=button]である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("button", options)).toBeInTheDocument();
  });
  test("[disabled=true]である", () => {
    const { getByRole } = render(<Disabled />);
    expect(getByRole("button", options)).toBeDisabled();
  });
});
