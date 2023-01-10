import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import * as stories from "./PostCards.stories";

const { Default } = composeStories(stories);

describe("src/components/templates/PostCards/PostCards.test.tsx", () => {
  test("Template である", () => {
    const { container } = render(<Default />);
    expect(container).toBeMolecule();
  });
});
