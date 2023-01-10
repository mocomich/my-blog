import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { AnchorButton } from "./AnchorButton";

type T = typeof AnchorButton;
type Story = ComponentStoryObj<T>;

export default {
  args: { children: "送信する" },
  component: AnchorButton,
  title: "Atoms/AnchorButton",
} as ComponentMeta<T>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
