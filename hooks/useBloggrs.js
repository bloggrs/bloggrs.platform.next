import { useEffect, useState } from "react";

const useBloggrs = () => {
    const [ bloggrs, setBloggrs ] = useState(null);

    useEffect(() => {
        const bloggrs_instance = new window.bloggrs.Bloggrs("42fe1d47-e993-4d47-92ee-340552c1c243");
        setBloggrs(bloggrs_instance);
    }, [])
    return bloggrs;
}

export default useBloggrs;