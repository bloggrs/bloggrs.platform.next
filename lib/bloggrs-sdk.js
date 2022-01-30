import { Bloggrs } from "./bloggrs";

const bloggrs = new Bloggrs("42fe1d47-e993-4d47-92ee-340552c1c243");

if (typeof(window) !== 'undefined') window.__bloggrs__ = bloggrs;

export default bloggrs;

const authenticated = bloggrs.auth.getAuth()

export async function getPosts({ categories } = {}) {
    await authenticated;
    return await bloggrs.posts.getPosts({ categories });
}

export async function getPost(id) {
    await authenticated;
    return await bloggrs.posts.getPost(id);
}

export async function getPostComments(id) {
    await authenticated;
    return await bloggrs.posts.getPostComments(id);
}

export async function getCategories() {
    await authenticated;
    return await bloggrs.categories.getCategories();
}

export async function getBlogHeaderWidgetData() {
    const { blog, pages } = await bloggrs.general.getBlogHeaderWidgetData();
    return { blog, pages }
}

export async function createPostComment({ content, PostId, UserId }) {
    const comment = await bloggrs.postcomments.createPostComment({
        content, PostId, UserId
    })
    return comment;
}

export async function getUserId() {  
    return bloggrs.auth.getUserId() 
}