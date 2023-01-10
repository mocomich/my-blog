import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { HeadGroup } from "./HeadGroup";

type T = typeof HeadGroup;
type Story = ComponentStoryObj<T>;

export default {
  component: HeadGroup,
  title: "Molecules/HeadGroup",
} as ComponentMeta<T>;

export const Default: Story = {
  args: { children: <button>All New</button>, title: "タイトル" },
};
