import { ReactNode } from "react";
import cx from "classnames";

export interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  let classNames = cx("button");
  return <button className={classNames}>{children}</button>;
}
