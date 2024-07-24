import { posts } from "../lib/placeholder-data";
import { Link } from "react-router-dom";
import moment from "moment";

function Archive() {
    return (
        <div className="Archive">
            <p>Posts:</p>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {/* TODO: created_at formatado e title como slug */}
                        <Link to={`/${moment.utc(post.created_at).format("YYYYMMDHmm")}/${post.category.toLowerCase()}/${post.slug}/`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Archive;