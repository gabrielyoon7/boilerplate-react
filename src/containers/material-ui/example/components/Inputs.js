import * as React from 'react';
import { Box, Container, Grid } from '@mui/material';
import AutoComplete from '../../../../components/material-ui/example/components/inputs/AutoComplete';


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
                    <AutoComplete/>
                </Container>
            </Box>
        </>
    );
}
