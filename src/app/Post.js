import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import moment from "moment";
import remarkGfm from 'remark-gfm'
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
            <h1>{post.title}</h1>

            <p>Publshed at: {moment(post.created_at).format("MMMM Do YYYY, dddd, HH:mm")}</p>
            <p>Updated at: {post.updated_at ? moment(post.updated_at).format("MMMM Do YYYY, dddd, HH:mm") : "-"}</p>
            <p>Status: {post.status}</p>
            <p>Category: {post.category}</p>
            <p>Tags: {post.tags.join(", ")}</p>

            <div>
                <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
            </div>
        </div>
    )
}

export default Post;