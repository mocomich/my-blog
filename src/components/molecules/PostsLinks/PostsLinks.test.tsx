import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import * as stories from "./PostsLinks.stories";

const { Default } = composeStories(stories);

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/posts",
    };
  },
}));

describe("src/components/molecules/PostLinks/PostLinks.test.tsx", () => {
  test("Molecule である", () => {
    const { container } = render(<Default />);
    expect(container).toBeMolecule();
  });

  test("role=[list]である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("list")).toBeInTheDocument();
  });
});
