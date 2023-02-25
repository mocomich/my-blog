import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { ThemeToggleButton } from "./ThemeToggleButton";

type T = typeof ThemeToggleButton;
type Story = ComponentStoryObj<T>;

export default {
  component: ThemeToggleButton,
  title: "Atoms/Tags",
} as ComponentMeta<T>;

export const Default: Story = {
  args: { isDarkMode: false },
};
