import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import * as stories from "./PostsTemplate.stories";

const { Default } = composeStories(stories);

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/posts",
    };
  },
}));

describe("src/components/templates/PostsTemplate/PostsTemplate.test.tsx", () => {
  test("Template である", () => {
    const { container } = render(<Default />);

    expect(container).toBeTemplate();
  });

  test("role=[main]である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("main")).toBeInTheDocument();
  });
});
