import React, { useCallback, useEffect, useRef } from 'react'
import './styles.css'

export const ErrorRender = ({ reloadIconColor = 'gray', handleRetry = () => {}, icon:Icon, height }) => {
    const handler = useRef()

    const _handleRetry = useCallback(() => {
        clearTimeout(handler.current)

        handler.current = setTimeout(handleRetry, 1000);
    }, [handleRetry])


    if (Icon) return <div onClick={_handleRetry}>{Icon}</div>
    return (
        <span style={{color: reloadIconColor,fontSize: height / 2}} onClick={_handleRetry} className="reload">
        &#x21bb;
            </span>
    )
}
