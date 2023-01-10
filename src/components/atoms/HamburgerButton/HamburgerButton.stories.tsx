import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { HamburgerButton } from "./HamburgerButton";

type T = typeof HamburgerButton;
type Story = ComponentStoryObj<T>;

export default {
  component: HamburgerButton,
  title: "Organisms/HamburgerButton",
} as ComponentMeta<T>;

export const Default: Story = {};
