import React from "react";
import { Control, FieldValues } from "react-hook-form";
import { Props as PhoneInputProps } from "react-phone-number-input";
import BasePhoneInput from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";

import classNames from "@lib/classNames";
import { Optional } from "@lib/types/utils";

export const PhoneInput = (
  props: Optional<PhoneInputProps<React.InputHTMLAttributes<HTMLInputElement>>, "onChange"> & {
    control: Control<FieldValues>;
  }
) => (
  <BasePhoneInput
    {...props}
    control={props.control}
    className={classNames(
      "border-1 focus-within:border-brand block w-full rounded-sm border border-gray-300 py-px px-3 shadow-sm ring-black focus-within:ring-1 dark:border-black dark:bg-black dark:text-white",
      props.className
    )}
    onChange={() => {
      /* DO NOT REMOVE: Callback required by PhoneInput, comment added to satisfy eslint:no-empty-function */
    }}
  />
);

export default PhoneInput;
