import dynamic from "next/dynamic";

export default () => dynamic(() => import("../Column"), {
    ssr: false
})