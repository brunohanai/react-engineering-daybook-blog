import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const content = `
Publiquei esse blog com 2 objetivos:

1. Tornar público o meu "Engineering Daybook"; e
2. Colocar em prática alguns conteúdos que estudei recentemente: JavaScript e React [aqui](https://www.coursera.org/professional-certificates/meta-ios-developer),
Firebase por conta própria, entre outros.

O código desse blog está aqui: [GitHub](https://github.com/brunohanai/react-engineering-daybook-blog/)

E você pode me encontrar aqui: [LinkedIn](https://www.linkedin.com/in/brunohanai/)
`

function About() {
    return (
        <Container sx={{ p: 4 }} className="About" component="div">
            <Paper elevation={2} sx={{ p: 3 }}>
                <Box sx={{ width: '100%' }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "22px", textAlign: "left", mb: 2 }}>Sobre</Typography>
                </Box>

                <Box sx={{ color: 'text.primary', textAlign: "left", width: "80%" }}>
                    <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
                </Box>
            </Paper>
        </Container>
    )
}

export default About;