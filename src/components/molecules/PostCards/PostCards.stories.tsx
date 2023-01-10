import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { postsFactory } from "../../../lib/utils/factory";

import { PostCards } from "./PostCards";

type T = typeof PostCards;
type Story = ComponentStoryObj<T>;

export default {
  component: PostCards,
  title: "Molecules/PostCards",
} as ComponentMeta<T>;

export const Default: Story = {
  args: { posts: postsFactory(6) },
  storyName: "記事一覧",
};
