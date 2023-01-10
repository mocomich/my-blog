import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { PostBody } from "./PostBody";

type T = typeof PostBody;
type Story = ComponentStoryObj<T>;

export default {
  component: PostBody,
  title: "Atoms/PostBody",
} as ComponentMeta<T>;

export const Default: Story = {
  args: { body: "タイトル" },
};
