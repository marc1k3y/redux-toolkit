import { postAPI } from "../services/PostService"

const PostContainer2 = () => {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(5)
  return (
    <div>
      {isLoading && <h1>posts loading..</h1>}
      {error && <h1>unexpected error</h1>}
      {posts?.map(post =>
        <div key={post.id}>{post.title} {post.body}</div>)}
    </div>
  )
}

export default PostContainer2