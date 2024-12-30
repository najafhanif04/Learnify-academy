import React from 'react'

export const Link = ({ children, path }) => {
    return (
        <a href={path} className='text-sm text-red-700'>{children}</a>
    )
}
