import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { NavMenu } from "./NavMenu";

type T = typeof NavMenu;
type Story = ComponentStoryObj<T>;

export default {
  component: NavMenu,
  title: "Molecules/NavMenu",
} as ComponentMeta<T>;

export const Default: Story = {};
