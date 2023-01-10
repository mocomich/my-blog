import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { postFactory } from "../../../lib/utils/factory";

import { PostCard } from "./PostCard";

type T = typeof PostCard;
type Story = ComponentStoryObj<T>;

export default {
  component: PostCard,
  title: "Molecules/PostCard",
} as ComponentMeta<T>;

export const Default: Story = {
  args: postFactory(1),
};
