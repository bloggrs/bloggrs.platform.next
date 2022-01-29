import Link from "next/link";


export default function CategoriesList({ categories }) {
    return (
        <div class="">
            <h4>Categories</h4>
            <ul style={{ padding: '1rem' }}>
                {
                    categories.map(category => (
                        <li>
                            <Link href={`/category/${category.name.split(" ").join("-").toLowerCase()}`}>
                                <a>
                                    {category.name} {"  "}
                                    ({category.meta.posts_count})
                                </a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}