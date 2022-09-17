import * as React from 'react';
import { Box, Container, Grid, Stack } from '@mui/material';
import BottomNavigation from '../../../../components/material-ui/example/components/navigation/BottomNavigation';

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
                        <BottomNavigation/>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
