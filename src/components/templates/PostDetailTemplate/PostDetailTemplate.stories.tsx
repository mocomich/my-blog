import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { postFactory } from "../../../lib/utils/factory";

import { PostDetailTemplate } from "./PostDetailTemplate";

type T = typeof PostDetailTemplate;
type Story = ComponentStoryObj<T>;

export default {
  component: PostDetailTemplate,
  title: "Templates/PostDetailTemplate",
} as ComponentMeta<T>;

export const Default: Story = {
  args: { body: postFactory(1).body, post: postFactory(1) },
  storyName: "記事一覧",
};
