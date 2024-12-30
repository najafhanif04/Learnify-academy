import classNames from 'classnames'
import React from 'react'

export const Typography = ({ children, type, block, color, className }) => {
    return (
        <div className={classNames(
            {
                'text-4xl font-bold': type === "h1",
                'text-lg font-semibold text-green-500': type === "p",
                'text-sm': type === "smallpara",
                'inline-block': !block,
                'text-green-700': color == "primary",
                'text-blue-700': color == "secondary"
            }, className)}> {children}</div >
    )
}
