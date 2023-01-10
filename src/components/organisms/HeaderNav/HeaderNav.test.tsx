import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import * as stories from "./HeaderNav.stories";

const { Default } = composeStories(stories);

describe("src/components/organisms/HeaderNav/HeaderNav.stories.test.tsx", () => {
  const options = { name: "Button" };
  test("Organismsである", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });

  test("[role=navigation]である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("navigation")).toBeInTheDocument();
  });
});
