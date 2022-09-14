import * as React from 'react';
import { Box, Container, Grid, Stack } from '@mui/material';
import Avatars from '../../../../components/material-ui/example/components/data-display/Avatars';
import Badge from '../../../../components/material-ui/example/components/data-display/Badge';
import Chips from '../../../../components/material-ui/example/components/data-display/Chips';

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
                        <Avatars/>
                        <Badge/>
                        <Chips/>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
