import { posts } from "../lib/placeholder-data";

function Home() {
    return (
        <div className="Home">
            <p>Posts:</p>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;