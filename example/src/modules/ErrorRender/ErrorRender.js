import React from 'react'
import './styles.css'

export const ErrorRender = ({ handleRetry }) => {
    return (
        <button onClick={handleRetry}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front text"> retry
            </span>
        </button>
    )
}
