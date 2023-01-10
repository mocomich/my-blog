import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { DefaultHeader } from "./DefaultHeader";

type T = typeof DefaultHeader;
type Story = ComponentStoryObj<T>;

export default {
  component: DefaultHeader,
  title: "Organisms/DefaultHeader",
} as ComponentMeta<T>;

export const Default: Story = {};
