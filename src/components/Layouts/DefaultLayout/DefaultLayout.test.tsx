import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import * as stories from "./DefaultLayout.stories";

const { Default } = composeStories(stories);

describe("components/layouts/DefaultLayout/DefaultLayout.test.tsx", () => {
  test("主要ランドマークを識別できる", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("banner")).toBeInTheDocument();
    // expect(getByRole('complementary')).toBeInTheDocument()
    expect(getByRole("contentinfo")).toBeInTheDocument();
  });
});
