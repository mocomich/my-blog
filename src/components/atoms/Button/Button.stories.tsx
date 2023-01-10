import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Button } from "./Button";

type T = typeof Button;
type Story = ComponentStoryObj<T>;

export default {
  component: Button,
  title: "Atoms/Button",
} as ComponentMeta<T>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    children: "Button",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "large",
  },
};

export const Primary: Story = {
  args: {
    children: "Button",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    color: "secondary",
  },
};

export const Danger: Story = {
  args: {
    children: "Button",
    color: "danger",
  },
};

export const Disabled = {
  args: {
    children: "Button",
    disabled: true,
  },
};

export const FullWidth = {
  args: {
    children: "Button",
    fullWidth: true,
  },
};
