import Link from "next/link";
import { getPost, getPostComments } from "../../lib/bloggrs-sdk";
import SinglePostItem from "../../components/SinglePost";
import SingleComment from "../../components/SingleComment";
import CommentsPanel from "../../components/CommentsPanel";

export async function getServerSideProps(context) {
    const { query } = context;
    const { slug } = query;
    const post = await getPost(slug);
    const comments_result = await getPostComments(post.id);
    return {
        props: {
            post, comments_result
        }
    }
}

export default function SinglePost({ post, comments_result }){
    const { comments, page, pageSize, count } = comments_result
    console.log({ comments_result })
    return (
      <div className='flex-grid'>
        <div className='col-offset-2 col-5'>
          <SinglePostItem post={post} />
        </div>
        <div className="col-offset-2 col-5">
            <CommentsPanel 
                post={post}
                comments={comments}
                pagination={{
                    page, pageSize, count
                }}
            />
        </div>
      </div>
    )
}