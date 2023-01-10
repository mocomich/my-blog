import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import * as stories from "./HomeTemplate.stories";

const { Default } = composeStories(stories);

describe("src/components/templates/HomeTemplate/HomeTemplate.test.tsx", () => {
  test("Template である", () => {
    const { container } = render(<Default />);
    expect(container).toBeTemplate();
  });
  test("role=[main]である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("main")).toBeInTheDocument();
  });
});
