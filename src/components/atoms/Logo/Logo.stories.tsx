import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Logo } from "./Logo";

type T = typeof Logo;
type Story = ComponentStoryObj<T>;

export default {
  component: Logo,
  title: "Atoms/Logo",
} as ComponentMeta<T>;

export const Default: Story = {};
