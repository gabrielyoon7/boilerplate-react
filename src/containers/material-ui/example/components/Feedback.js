import * as React from 'react';
import { Box, Container, Stack } from '@mui/material';
import Alerts from '../../../../components/material-ui/example/components/feedback/Alerts';
import Backdrops from '../../../../components/material-ui/example/components/feedback/Backdrops';
import Dialogs from '../../../../components/material-ui/example/components/feedback/Dialogs';
import Progress from '../../../../components/material-ui/example/components/feedback/Progress';


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
                        <Alerts />
                        <Backdrops/>
                        <Dialogs/>
                        <Progress/>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
