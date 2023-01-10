import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { postFactory } from "../../../lib/utils/factory";

import { Tag } from "./Tag";

type T = typeof Tag;
type Story = ComponentStoryObj<T>;

export default {
  component: Tag,
  title: "Atoms/Tag",
} as ComponentMeta<T>;

export const Default: Story = {
  args: { tag: postFactory(1).tags[0] },
};
