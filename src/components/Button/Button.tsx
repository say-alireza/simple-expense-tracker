import styles from "./Button.module.css";

import { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  color?: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      className={classNames(styles.btn, styles[`btn-${color}`])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;