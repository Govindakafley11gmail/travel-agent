// ✅ FORMIK CONTROLLER (FIXED)
"use client";

import React, { useState } from "react";
import { ErrorMessage, Field } from "formik";
import { Eye, EyeOff, User } from "lucide-react";

interface FieldConfig {
  type?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  values?: unknown;
  multiple?: boolean;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  subType?: string;
}

export interface FormikControllerProps {
  control?: string;
  label?: string;
  name: string;
  fieldConfig: FieldConfig;
  className?: string;
  fieldstyle?: string;
  inputWidthIconStyle?: string;
  checkstyle?: string;
  checkmainstyle?: string;
  labelStyle?: string;
  id?: string;
  setFieldValue?: (key: string, value: unknown | unknown[]) => void;
}

function FormikController({
  label,
  name,
  className,
  fieldstyle,
  inputWidthIconStyle,
  fieldConfig,
  labelStyle,
}: FormikControllerProps) {
  const [showPassword, setShowPassword] = useState(false);

  switch (fieldConfig.type) {
    case "input":
      return (
        <div className={className}>
          <label htmlFor={name} className={labelStyle}>{label}</label>
          <Field
            id={name}
            name={name}
            type={fieldConfig.subType || "text"} // ✅ Added type attribute
            placeholder={fieldConfig.placeholder}
            className={fieldstyle}
            autoComplete="off"
          />
            <ErrorMessage
            name={name}
            component="div"
            className="text-sm text-red-600 mt-2"
          />
        </div>
      );

    case "inputwithicon":
      const Icon = fieldConfig.Icon || User;
      let inputType = "text";

      if (fieldConfig.subType === "password") {
        inputType = showPassword ? "text" : "password";
      }

      return (
        <div className={className}>
          <label htmlFor={name}  className={labelStyle}>{label}</label>
          <div className="relative mt-1">
            <Icon
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Field
              type={inputType}
              id={name}
              name={name}
              placeholder={fieldConfig.placeholder}
              className={inputWidthIconStyle}
              autoComplete={
                name === "email"
                  ? "email"
                  : fieldConfig.subType === "password"
                    ? "new-password"
                    : "off"
              }
            />
            {fieldConfig.subType === "password" && (
              <button
                type="button" // ✅ Important: prevent form submission
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            )}
          </div>
          <ErrorMessage
            name={name}
            component="div"
            className="text-sm text-red-600"
          />
        </div>
      );

    default:
      return null;
  }
}

export default FormikController;