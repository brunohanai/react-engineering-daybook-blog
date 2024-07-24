import { useParams } from "react-router-dom";
import moment from "moment";
import { posts } from "../lib/placeholder-data";

function Post() {
    const { createdAt, category, slug } = useParams();
    const post = posts.find(post => {
        const postCreatedAt = moment.utc(post.created_at).format("YYYYMMDHmm");
        return postCreatedAt === createdAt;
    });

    if (!post) {
        return <p>Texto não encontrado</p>;
    }

    return (
        <div className="Post">
            Post!

            <h1>{post.title}</h1>

            <h2>{post.headline}</h2>

            <p>Publshed at: {moment(post.created_at).format("MMMM Do YYYY, dddd, HH:mm")}</p>
            <p>Updated at: {post.updated_at ? moment(post.updated_at).format("MMMM Do YYYY, dddd, HH:mm") : "-"}</p>
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