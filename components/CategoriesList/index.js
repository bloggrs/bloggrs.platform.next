import Link from "next/link";


export default function CategoriesList({ categories, selected }) {
    return (
        <div class="">
            <h4>Categories</h4>
            <ul style={{ padding: '1rem' }}>
                {
                    categories.map(category => {
                        const isSelected = category.slug == selected;
                        const style = isSelected ? { fontWeight: 'bold' } : undefined;
                        return (
                            <li style={style}>
                                <Link href={`/category/${category.slug}`}>
                                    <a>
                                        {category.name} {"  "}
                                        ({category.meta.posts_count})
                                    </a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}