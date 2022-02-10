import getBreakpointMode from "../utils/getBreakpointMode";
import { useState, useEffect } from 'react'; // <--- import the hook


export const useBreakpointMode = () => {
    const [ mode, setMode ] = useState(getBreakpointMode());

    useEffect(() => {
        const onResizeHandler = e => {
            setMode(getBreakpointMode());
        }
        window.addEventListener("resize", onResizeHandler);
        return () => {
            window.removeEventListener("resize", onResizeHandler);
        }
    })
    return mode;
}