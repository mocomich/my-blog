import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import * as stories from "./DefaultFooter.stories";

const { Default } = composeStories(stories);

describe("src/components/molecules/DefaultFooter/DefaultFooter.tsx", () => {
  test("Molecule であること", () => {
    const { container } = render(<Default />);
    expect(container).toBeMolecule();
  });
  test("role=[contentinfo]であること", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("contentinfo")).toBeInTheDocument();
  });
});
