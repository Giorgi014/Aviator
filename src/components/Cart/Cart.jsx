import { clsx } from "clsx";
import "./Cart.scss";

export const Cart = ({ variant = "default", children, ...props }) => {
  return (
    <div
      {...props}
      className={clsx(
        "cart",
        {
          "about": variant === "cart_about",
          "choose": variant === "cart_choose",
          "contact": variant === "cart_contact",
        }
      )}
    >
      {children}
    </div>
  );
};
