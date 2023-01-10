import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import * as stories from "./DateTime.stories";

const { Default } = composeStories(stories);

describe("src/components/atoms/DateTime.stories/DateTime.stories.test.tsx", () => {
  test("Atomである", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
});
