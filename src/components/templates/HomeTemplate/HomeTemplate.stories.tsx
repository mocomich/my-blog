import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { postsFactory } from "../../../lib/utils/factory";

import { HomeTemplate } from "./HomeTemplate";

type T = typeof HomeTemplate;
type Story = ComponentStoryObj<T>;

export default {
  component: HomeTemplate,
  title: "Templates/HomeTemplate",
} as ComponentMeta<T>;

export const Default: Story = {
  args: { posts: postsFactory(6) },
  storyName: "記事一覧",
};
