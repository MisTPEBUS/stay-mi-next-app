import React from "react";
import { useFormContext } from "react-hook-form";

export type DemoFieldItem = Record<string, string | number | boolean>;
type DemoFillButtonProps = {
  fields: DemoFieldItem[];
};

const DemoFillButton = ({ fields }: DemoFillButtonProps) => {
  const { setValue } = useFormContext();
  const handleFill = () => {
    fields.forEach((field) => {
      const [key, value] = Object.entries(field)[0];
      setValue(key, value);
    });
  };
  return (
    <div
      className="fixed top-14 right-4 z-40 h-10 w-10 cursor-pointer rounded-full bg-red-500 shadow-md transition-all duration-300 hover:bg-red-600 md:h-10 md:w-10"
      onClick={handleFill}
    ></div>
  );
};

export default DemoFillButton;
