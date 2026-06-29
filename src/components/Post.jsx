import "./Post.css";

const post = {
    id: 1,
    username: "devin",
    content: "This is my first post, hello. This is my first post, hello. This is my first post, hello. This is my first post, hello. "
}

function Post() {
    return (
        <p className="post">{post.content}</p>
    )
}

export default Post