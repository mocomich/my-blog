import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import * as stories from "./AnchorIcon.stories";

const { Default } = composeStories(stories);

describe("src/components/atoms/AnchorIcon/AnchorIcon.test.tsx", () => {
  test("Atom である", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
  test("[role=link]である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("link")).toBeInTheDocument();
  });
});
