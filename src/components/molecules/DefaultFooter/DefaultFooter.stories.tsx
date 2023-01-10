import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { DefaultFooter } from "./DefaultFooter";

type T = typeof DefaultFooter;
type Story = ComponentStoryObj<T>;

export default {
  component: DefaultFooter,
  title: "Layouts/DefaultFooter",
} as ComponentMeta<T>;

export const Default: Story = {};
