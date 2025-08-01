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
          "btn_bet": variant === "bet_btn",
          "btn_cancel": variant === "cancel_btn",
          "btn_mount": variant === "btn_mount",
          "btn_plus": variant === "btn_plus",
          "btn_minus": variant === "btn_minus",
          "btn_autobet": variant === "btn_autobet",
          "btn_autochashout": variant === "btn_autochashout",
        },
        props.className
      )}
    >
        {children}
    </button>
  );
};
