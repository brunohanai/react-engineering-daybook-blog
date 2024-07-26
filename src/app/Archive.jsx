import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPosts } from "../lib/store/postsSlice";
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import moment from "moment";
import Grid from "@mui/material/Grid";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";

function PostLink(post) {
    return (
        <Typography sx={{ textAlign: "left" }} variant="p">
            <Link to={`/${moment.unix(post.created_at.seconds).format("YYYYMMDHmm")}/${post.category.toLowerCase()}/${post.slug}/`}>
                {post.title}
            </Link>
        </Typography>
    )
}

function Archive() {
    const posts = useSelector(selectPosts).posts;
    const postsSorted = posts.sort((a, b) => b.created_at - a.created_at);

    return (
        <Container className="Archive" sx={{ p: 4 }}>
            <Paper elevation={2} sx={{ py: 3 }}>
                <Box sx={{ flexGrow: 1, maxWidth: "100%" }}>
                    <Grid container>
                        <Grid item xs={8} md={12}>
                            <Typography sx={{ fontWeight: "bold", fontSize: "22px", textAlign: "left", ml: 3 }}>Textos</Typography>
                                <List>
                                    {postsSorted.map(post => (
                                        <ListItem key={post.id}>
                                            <ListItemIcon>
                                                <Typography sx={{ color: "#333", fontSize: 16, textAlign: "left", ml: 1 }}>
                                                    {moment.unix(post.created_at.seconds).format("MMMM Do YYYY")}
                                                </Typography>
                                            </ListItemIcon>

                                            <ListItemText sx={{ pl: 2 }}>
                                                {PostLink(post)}
                                            </ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    )
}

export default Archive;