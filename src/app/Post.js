import { useParams } from "react-router-dom";
import { posts } from "../lib/placeholder-data"

function Post() {
    const { createdAt, category, slug } = useParams();
    const post = posts.find(post => post.created_at === createdAt);

    if (!post) {
        return <p>Texto não encontrado</p>;
    }

    return (
        <div className="Post">
            Post!

            <h1>{post.title}</h1>

            <h2>{post.headline}</h2>

            <p>Publshed at: {post.created_at} | Updated at: {post.updated_at}</p>
            <p>Status: {post.status}</p>
            <p>Category: {post.category}</p>
            <p>Tags: {post.tags.join(", ")}</p>

            <div>
                {post.content.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    )
}

export default Post;