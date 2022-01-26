import { useEffect, useState } from "react";

const useBloggrs = () => {
    const [ bloggrs, setBloggrs ] = useState(null);

    useEffect(() => {
        const bloggrs_instance = new window.bloggrs.Bloggrs("2fe78ab2-cab2-469a-a05e-1ee761e3d2b7");
        setBloggrs(bloggrs_instance);
    }, [])
    return bloggrs;
}

export default useBloggrs;