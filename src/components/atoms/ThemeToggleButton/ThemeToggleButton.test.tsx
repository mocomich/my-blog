import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import * as stories from "./ThemeToggleButton.stories";

const { Default } = composeStories(stories);

describe("src/components/Atoms/Toggle/Toggle.test.tsx", () => {
  test("Atomであること", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
});
