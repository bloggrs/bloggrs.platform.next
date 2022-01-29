import { useEffect, useState } from "react";

const useBloggrs = () => {
    const [ bloggrs, setBloggrs ] = useState(null);

    useEffect(() => {
        const bloggrs_instance = new window.bloggrs.Bloggrs("52dfd6e7-18a0-4437-9124-b81ba8fbfec6");
        setBloggrs(bloggrs_instance);
    }, [])
    return bloggrs;
}

export default useBloggrs;