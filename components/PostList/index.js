import SinglePost from "../SinglePost";


export default function PostList({ posts, title }) {
    return (
        <>
            <div class="flex-grid">
                { title && <h3>{title}</h3> }
                {
                    posts.map(post => 
                        <SinglePost post={post}/>
                    )
                }
            </div>
            {
                !posts.length && <p>No posts to show..</p>
            }
        </>
    )
}