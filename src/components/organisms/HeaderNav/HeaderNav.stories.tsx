import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { HeaderNav } from "./HeaderNav";

type T = typeof HeaderNav;
type Story = ComponentStoryObj<T>;

export default {
  component: HeaderNav,
  title: "Organisms/HeaderNav",
} as ComponentMeta<T>;

export const Default: Story = {};
