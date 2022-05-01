import { FC } from "react"

export const Logo: FC<{ size: number }> = ({ size }) => {
    return (
        <div
            className="text-xl rounded-full bg-primary text-on-primary font-bold text-center align-middle hover:bg-primary-dark"
            style={{ width: `${size}px`, height: `${size}px`, lineHeight: `${size}px` }}
        >
            A
        </div>
    )
}