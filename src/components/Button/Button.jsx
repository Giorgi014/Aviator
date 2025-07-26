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
          "btn_menu": variant === "menu",
          "btn_history": variant === "round_history",
          "btn_show_history": variant === "show_round_history",
          "btn_bets": variant === "bets",
          "btn_previus": variant === "previus",
          "btn_weekly": variant === "weekly",
          "btn_monthly": variant === "monthly",
        },
        props.className
      )}
    >
        {children}
    </button>
  );
};
