import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { postFactory } from "../../../lib/utils/factory";

import { Tags } from "./Tags";

type T = typeof Tags;
type Story = ComponentStoryObj<T>;

export default {
  component: Tags,
  title: "Molecules/Tags",
} as ComponentMeta<T>;

export const Default: Story = {
  args: { tags: postFactory(1).tags },
};
