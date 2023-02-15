import React from "react";
import { useController } from "react-hook-form";

const Input = ({ type, placeholder, name, control, children, ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...field}
        className={`w-full px-4 py-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:focus:border-gray-700 dark:bg-dark-four-color dark:text-color-1 font-medium dark:placeholder:font-medium mt-2 outline-none focus:border-gray-400 transition-all duration-200 bg-transparent text-sm ${children ? 'pr-12' : ''}`}
      />
      {children &&<span className=" absolute right-4 ml-5 z-10 top-8 -translate-y-1/4 cursor-pointer select-none">
        {children}
      </span>}
    </div>
  );
};

export default Input;
