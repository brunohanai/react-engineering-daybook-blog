import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import moment from "moment";
import remarkGfm from 'remark-gfm'
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
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
        <Container sx={{ p: 4 }} className="Post" component="div">
            <Paper elevation={2} sx={{ p: 3 }}>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                        <Grid xs={8} sx={{ textAlign: "left" }}>
                            <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>{post.title}</Typography>
                        </Grid>
                        <Grid xs={4} sx={{ textAlign: "right" }}>
                            <Typography sx={{ fontWeight: "bold" }}>{moment(post.created_at).format("MMMM Do YYYY")}</Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ color: 'text.secondary', textAlign: "left" }}>
                    in {post.category}
                </Box>

                <Box sx={{ color: 'text.primary', textAlign: "left", width: "80%" }}>
                    <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
                </Box>
            </Paper>
        </Container>
    )
}

export default Post;