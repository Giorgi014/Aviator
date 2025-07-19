import { clsx } from "clsx";
import "./Button.scss"

export const Button = ({ variant = "default", children, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        "btn",
        {
          "btn_demo": variant === "demo",
          "btn_contact": variant === "contact_us",
        },
        props.className
      )}
    >
        {children}
    </button>
  );
};
