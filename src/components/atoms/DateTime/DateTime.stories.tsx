import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { postFactory } from "../../../lib/utils/factory";

import { DateTime } from "./DateTime";

type T = typeof DateTime;
type Story = ComponentStoryObj<T>;

export default {
  component: DateTime,
  title: "Atoms/DateTime",
} as ComponentMeta<T>;

export const Default: Story = {
  args: { date: postFactory(1).publishedAt },
};
