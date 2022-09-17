import * as React from 'react';
import { Box, Container, Grid, Stack } from '@mui/material';
import BottomNavigation from '../../../../components/material-ui/example/components/navigation/BottomNavigation';
import Drawers from '../../../../components/material-ui/example/components/navigation/Drawers';
import Breadcrumbs from '../../../../components/material-ui/example/components/navigation/Breadcrumbs';
import Links from '../../../../components/material-ui/example/components/navigation/Links';

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
                        {/* <Breadcrumbs/> */}
                        <Drawers/>
                        <Links/>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
