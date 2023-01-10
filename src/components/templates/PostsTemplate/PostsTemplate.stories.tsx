import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { postsFactory } from "../../../lib/utils/factory";

import { PostsTemplate } from "./PostsTemplate";

type T = typeof PostsTemplate;
type Story = ComponentStoryObj<T>;

export default {
  component: PostsTemplate,
  title: "Templates/PostsTemplate",
} as ComponentMeta<T>;

export const Default: Story = {
  args: { posts: postsFactory(6) },
  storyName: "記事一覧",
};
