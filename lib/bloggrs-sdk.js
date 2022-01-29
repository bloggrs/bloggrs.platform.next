import { Bloggrs } from "./bloggrs";

const bloggrs = new Bloggrs("52dfd6e7-18a0-4437-9124-b81ba8fbfec6");
export default bloggrs;

const authenticated = bloggrs.auth.getAuth()

export async function getPosts() {
    await authenticated;
    return await bloggrs.posts.getPosts();
}

export async function getCategories() {
    await authenticated;
    return await bloggrs.categories.getCategories();
}

export async function getBlogHeaderWidgetData() {
    const { blog, pages } = await bloggrs.general.getBlogHeaderWidgetData();
    return { blog, pages }
}