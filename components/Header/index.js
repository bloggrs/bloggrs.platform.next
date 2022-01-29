import Link from "next/link";
import { useEffect, useState } from "react";
import { getBlogHeaderWidgetData } from "../../lib/bloggrs-sdk";

export default function Header(){
    const [ blog, setBlog ] = useState(null);
    const [ pages, setPages ] = useState(null);

    useEffect(async () => {
        const { blog, pages } = await getBlogHeaderWidgetData();
        setBlog(blog);
        setPages(pages);
    },[])
    if (!blog || !pages) return <center>header loading</center>
    return (
        <>
            <header className="main-container header fixed">
                {/* Nav Bar with Logo Area */}
                <div className="flex-grid  navbar">
                {/* Mobile Menu */}
                <input type="checkbox" id="mobileMenu" className="hide" />
                <label id="mobileMenuLabel" className="mobile-menu left-side" htmlFor="mobileMenu">
                    <i className="hamburger" />
                </label>
                <label className="full-screen" htmlFor="mobileMenu" />
                <div className="col-2 logo">
                    {blog.name}
                </div>
                <nav className="col-10" id="topMenuNav">
                    <div className="navbar-links">
                    <input type="radio" className="hide" name="navbar-menu" id="navbarDropHide" defaultChecked />
                    {
                        pages.map(page => (
                            <Link href={`/${page.slug}`}>
                                <a >{page.name}</a>
                            </Link>
                        ))
                    }
                    </div>
                </nav>
                </div>
            </header>
            <div class="fixed-nav-space" id="top"></div>
        </>
    )
}