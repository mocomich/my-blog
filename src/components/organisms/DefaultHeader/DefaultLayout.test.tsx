import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import * as stories from "./DefaultHeader.stories";

const { Default } = composeStories(stories);

describe("src/components/Organisms/DefaultLayout/DefaultLayout.test.tsx", () => {
  test("Organismsであること", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
  test("[role=banner]である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("banner")).toBeInTheDocument();
  });
});
