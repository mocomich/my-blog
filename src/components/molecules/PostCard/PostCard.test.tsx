import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import * as stories from "./PostCard.stories";

const { Default } = composeStories(stories);

describe("src/components/Molecules/PostCard/PostCard.stories.test.tsx", () => {
  test("Molecule であること", () => {
    const { container } = render(<Default />);
    expect(container).toBeMolecule();
  });
  test("[role=article]である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("article")).toBeInTheDocument();
  });
});
