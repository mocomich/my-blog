import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { PostsLinks } from "./PostsLinks";

type T = typeof PostsLinks;
type Story = ComponentStoryObj<T>;

export default {
  component: PostsLinks,
  title: "Molecules/PostsLinks",
} as ComponentMeta<T>;

export const Default: Story = {};
