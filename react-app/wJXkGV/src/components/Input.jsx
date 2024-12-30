import React from 'react'

export const Input = ({ children, type, placeholder }) => {
    return (
        <input type={type} value={children} placeholder={placeholder} />
    )
}
