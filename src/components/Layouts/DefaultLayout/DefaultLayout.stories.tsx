import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { DefaultLayout } from "./DefaultLayout";

type T = typeof DefaultLayout;
type Story = ComponentStoryObj<T>;

export default {
  component: () => <>{DefaultLayout(<main />)}</>,
  title: "Layouts/DefaultLayout",
} as ComponentMeta<T>;

export const Default: Story = {};
