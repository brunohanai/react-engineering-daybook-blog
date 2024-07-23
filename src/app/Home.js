import { posts } from "../lib/placeholder-data";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="Home">
            <p>Posts:</p>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {/* TODO: created_at formatado e title como slug */}
                        <Link to={`/${post.created_at}/${post.category.toLowerCase()}/${post.title.toLowerCase()}/`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;