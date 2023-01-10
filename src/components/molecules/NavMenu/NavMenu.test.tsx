import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import * as stories from "./NavMenu.stories";

const { Default } = composeStories(stories);

describe("src/components/Organisms/NavMenu/NavMenu.test.tsx", () => {
  test("Organismsであること", () => {
    const { container } = render(<Default />);
    expect(container).toBeMolecule();
  });
  test("[role=list]である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("list")).toBeInTheDocument();
  });
});
