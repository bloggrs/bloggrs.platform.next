import Link from "next/link";
import { getPost, getPostComments } from "../../lib/bloggrs-sdk";
import SinglePostItem from "../../components/SinglePost";
import SingleComment from "../../components/SingleComment";
import CommentsPanel from "../../components/CommentsPanel";

export async function getServerSideProps(context) {
    const { query } = context;
    const { slug } = query;
    const post = await getPost(slug);
    const comments = await getPostComments(post.id);
    return {
        props: {
            post, comments
        }
    }
}

export default function SinglePost({ post, comments }){
    return (
      <div className='flex-grid'>
        <div className='col-offset-2 col-5'>
          <SinglePostItem post={post} />
        </div>
        <div className="col-offset-2 col-5">
            <CommentsPanel post={post} comments={comments}/>
        </div>
      </div>
    )
}