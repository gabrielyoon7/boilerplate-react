import * as React from 'react';
import { Box, Container, Grid, Stack } from '@mui/material';
import Accordions from '../../../../components/material-ui/example/components/surfaces/Accordions';
import AppBars from '../../../../components/material-ui/example/components/surfaces/AppBars';
import Cards from '../../../../components/material-ui/example/components/surfaces/Cards';
import Papers from '../../../../components/material-ui/example/components/surfaces/Papers';

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
                    <Stack spacing={3}>
                        {/* Stack으로 적당한 거리 두기 가능 */}
                        <Accordions/>
                        <AppBars/>
                        <Cards/>
                        <Papers/>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
