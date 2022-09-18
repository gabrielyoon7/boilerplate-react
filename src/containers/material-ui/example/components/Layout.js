import * as React from 'react';
import { Box, Container, Grid, Stack } from '@mui/material';
import Boxes from '../../../../components/material-ui/example/components/layout/Boxes';
import Containers from '../../../../components/material-ui/example/components/layout/Containers';
import Grids from '../../../../components/material-ui/example/components/layout/Grids';
import GridsV2 from '../../../../components/material-ui/example/components/layout/GridsV2';

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
                        <Boxes/>
                        <Containers/>
                        <Grids/>
                        <GridsV2/>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
