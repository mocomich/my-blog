import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import * as stories from "./Tag.stories";

const { Default } = composeStories(stories);

describe("src/components/molecules/Tags/Tags.test.tsx", () => {
  test("Moleculeである", () => {
    const { container } = render(<Default />);
    expect(container).toBeMolecule();
  });
  test("role=[list] である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("list")).toBeInTheDocument();
  });
});
