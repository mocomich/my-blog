import { ComponentPropsWithoutRef } from "react";

type Map = {
  class: string[];
  key: string;
};

type Props = ComponentPropsWithoutRef<"button"> & {
  classes?: string[];
  color?: "default" | "primary" | "secondary" | "danger";
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
};

export const Button: React.FC<Props> = ({ children, type = "button", color = "default", size = "medium", fullWidth = false, disabled = false, classes = [], onClick }) => {
  const ColorSetting: Map[] = [
    {
      class: ["text-gray-700", "bg-white", "hover:bg-opacity-50", "border-gray-300"],
      key: "default",
    },
    {
      class: ["text-white", "bg-asset-blue", "hover:bg-asset-deepBlue", "focus:ring-asset-blue", "border-transparent"],
      key: "primary",
    },
    {
      class: ["text-white", "bg-asset-black", "hover:bg-asset-deepBlack", "focus:ring-asset-black", "border-transparent"],
      key: "secondary",
    },
    {
      class: ["text-white", "bg-asset-red", "hover:bg-asset-deepRed", "focus:ring-asset-red", "border-transparent"],
      key: "danger",
    },
  ];

  const SizeSetting: Map[] = [
    { class: ["py-1", "px-1", "text-sm"], key: "small" },
    { class: ["py-2", "px-2", "text-base"], key: "medium" },
    { class: ["py-2", "px-2", "text-lg"], key: "large" },
  ];

  const colors = ColorSetting.filter((map: Map) => map.key === color).map((map: Map) => map.class);

  const sizes = SizeSetting.filter((map: Map) => map.key === size).map((map: Map) => map.class);

  const className = ["inline-flex", "justify-center", "rounded-md", "border", "font-semibold", fullWidth ? "w-full" : "", disabled ? "opacity-50 cursor-not-allowed" : "", ...colors[0], ...sizes[0], ...classes].join(" ");

  return (
    <button className={className} disabled={disabled} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
