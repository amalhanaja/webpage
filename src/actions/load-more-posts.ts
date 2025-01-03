import {getPostList, Post} from "@/service/blogs";

export const loadMorePosts = async (prevState: PostListState): Promise<PostListState> => {
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