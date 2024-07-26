import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, incrementLikes } from "../lib/store/postsSlice";
import Markdown from "react-markdown";
import moment from "moment";
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm'
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";

function Post() {
    const { createdAt, category, slug } = useParams();
    const dispatch = useDispatch()

    const postsStatus = useSelector(selectPosts).status;
    const posts = useSelector(selectPosts).posts;
    const post = posts.find(post => {
        const postCreatedAt = moment.unix(post.created_at.seconds).format("YYYYMMDHmm");
        return postCreatedAt === createdAt;
    });

    function handleLike(postId, likesCount) {
        // TODO: Evitar vários likes da mesma pessoa no mesmo post
        dispatch(incrementLikes({
            postId: postId,
            likesCount: likesCount,
        }));
    }

    if (postsStatus == "idle" || postsStatus == "loading") {
        // TODO: melhorar
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else if (!post) {
        return (
            <div>
                <p>Texto não encontrado</p>
                <Link to="/">Voltar</Link>
            </div>
        )
    }

    return (
        <Container sx={{ p: 4 }} className="Post" component="div">
            <Paper elevation={2} sx={{ p: 3 }}>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                        <Grid xs={8} sx={{ textAlign: "left" }}>
                            <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>{post.title}</Typography>
                        </Grid>
                        <Grid xs={4} sx={{ textAlign: "right" }}>
                            <Typography sx={{ fontWeight: "bold" }}>{moment.unix(post.created_at.seconds).format("MMMM Do YYYY")}</Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ color: 'text.secondary', textAlign: "left" }}>
                    in {post.category}
                </Box>

                <Box sx={{ color: 'text.primary', textAlign: "left", width: "80%", whiteSpace: "pre-wrap" }}>
                    <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{post.content.replace(/\\n/gi, "\n").replace(/\n/gi, "<br/>")}</Markdown>
                </Box>

                <Box sx={{ color: 'text.primary', textAlign: "right", width: "100%" }}>
                    <button onClick={() => { handleLike(post.id, post.likes) }}>Like ({post.likes})</button>
                </Box>
            </Paper>
        </Container>
    )
}

export default Post;