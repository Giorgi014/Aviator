import { clsx } from "clsx";
import "./BetsHead.scss";

export const BetsHead = ({variant = "default", children, ...props}) => {
  return (
    <div
      {...props}
      className={clsx(
        "default_head",
        {
          "all_bets_head": variant === "all_bets",
          "my_bets_head": variant === "my_bets",
          "top_wins_head": variant === "top_wins",
        }
      )
      }
    >
      {children}
    </div>
  );
};
