

export default function SinglePost({ post }) {
    return (
        <div class="">
            <h4>{post.title}</h4>
            <p>
                {post.meta.content_text}
            </p>
            <div style={{ display: 'inline-flex'}}>
                <p>{post.meta.likes_count} likes</p> 
                <p>&nbsp;&nbsp; | &nbsp;&nbsp;</p>
                <p>{post.meta.comments_count} comments</p>
                <p>&nbsp;&nbsp; | &nbsp;&nbsp;</p>
                <p>January 28, 2022</p>
            </div>
        </div>
    )
}