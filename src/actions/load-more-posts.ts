import {getPostList, PostList} from "@/service/blogs";

export const loadMorePosts = async (prevState: PostList): Promise<PostList> => {
    const results = await getPostList({
        pageSize: 6,
        after: prevState.endCursor,
    });
    const posts = [...prevState.posts, ...results.posts]
    return {
        ...results,
        posts: posts,
    }
}