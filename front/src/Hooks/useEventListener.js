import { useEffect, useRef } from "react"

export const useEventListener = (eventName, handler, element = window) => {
    const saveHandler = useRef()

    useEffect(() => {
        saveHandler.current = handler
    }, [handler])

    useEffect(() => {
        const eventListener = (event) => saveHandler.current(event)

        element.addEventListener(eventName, eventListener)

        return () => {
            element.removeEventListener(eventName, eventListener)
        }
    }, [eventName, element])
}