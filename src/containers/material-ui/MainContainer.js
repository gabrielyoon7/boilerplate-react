import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography';
import { Box, Container } from "@mui/material";

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

                    <Typography variant="h2">Components</Typography>
                    <Box
                        sx={{ pl: 3 }}
                    >
                        <Typography variant="h4">
                            <Link to="example/components/inputs">Inputs</Link>
                        </Typography>
                        <Typography variant="h4">
                            <Link to="example/components/data-display">DataDisplay</Link>
                        </Typography>
                        <Typography variant="h4">
                            <Link to="example/components/feedback">Feedback</Link>
                        </Typography>
                        <Typography variant="h4">
                            <Link to="example/components/surfaces">Surfaces</Link>
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    )
}