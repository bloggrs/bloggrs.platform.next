import dynamic from 'next/dynamic'

const DynamicBloggrs = dynamic(
    () => {
        
        const bloggrs = 
        (typeof window !== "undefined") ? null :
        new window.bloggrs.Bloggrs("2fe78ab2-cab2-469a-a05e-1ee761e3d2b7");
        return { default: bloggrs }
    },
    { ssr: false }
  )

export default DynamicBloggrs;