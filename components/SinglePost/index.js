import Link from "next/link";
import styles from "./SinglePost.module.css";

export default function SinglePost({ post }) {
    return (
        <div class="">
            <Link href={`/posts/${post.slug}`}>
                <h4 style={{ cursor: 'pointer' }}>{post.title}</h4>
            </Link>
            <p>
                {post.meta.content_text}
            </p>
            <div style={{ display: "grid" }}>
                <div style={{ display: 'inline-flex'}}>
                    <p className={styles.p_likes}>{post.meta.likes_count} likes</p> 
                    <p>&nbsp;&nbsp; | &nbsp;&nbsp;</p>
                    <p>{post.meta.comments_count} comments</p>
                    <p>&nbsp;&nbsp; | &nbsp;&nbsp;</p>
                    <p>January 28, 2022</p>
                </div>
            </div>
        </div>
    )
}