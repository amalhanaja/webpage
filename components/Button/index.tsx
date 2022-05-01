
import classNames from "classnames";
import { FC, ReactElement } from "react";


export const OutlinedButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (<button {...props} className={classNames("border-primary border-solid rounded-lg h-12 text-primary px-4 border-1 hover:border-primary-dark hover:text-primary-dark", props.className)} />)
}