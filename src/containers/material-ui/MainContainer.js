import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography';
import { Box, Container, Divider } from "@mui/material";

export default () => {
    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth={false}>
                    <Typography variant="h2">MUI Cheat Sheet</Typography>
                    <Box sx={{ mb: 5 }}>
                        <a href="https://mui.com/material-ui/getting-started/overview/" target="_blank">공식 문서에서 확인하기</a>
                    </Box>
                    <Typography variant="h4">Components</Typography>
                    <Box
                        sx={{ pl: 3 }}
                    >
                        <Typography variant="h5">
                            <Link to="example/components/inputs">Inputs</Link>
                        </Typography>
                        <Typography variant="h5">
                            <Link to="example/components/data-display">DataDisplay</Link>
                        </Typography>
                        <Typography variant="h5">
                            <Link to="example/components/feedback">Feedback</Link>
                        </Typography>
                        <Typography variant="h5">
                            <Link to="example/components/surfaces">Surfaces</Link>
                        </Typography>
                        <Typography variant="h5">
                            <Link to="example/components/navigation">Navigation</Link>
                        </Typography>
                        <Typography variant="h5">
                            <Link to="example/components/layout">Layout</Link>
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    )
}