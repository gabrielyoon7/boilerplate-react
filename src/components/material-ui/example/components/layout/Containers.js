import { Box, Container } from "@mui/material"

export default () => {
    return (
        <>
            <h1>Container</h1>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '10vh' }} />
            </Container>
            <Container fixed>
                <Box sx={{ bgcolor: '#cfe8fc', height: '10vh' }} />
            </Container>
        </>
    )
}