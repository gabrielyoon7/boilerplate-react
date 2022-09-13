import * as React from 'react';
import { Box, Container, Grid, Stack } from '@mui/material';
import AutoComplete from '../../../../components/material-ui/example/components/inputs/AutoComplete';
import Button from '../../../../components/material-ui/example/components/inputs/Button';
import ButtonGroup from '../../../../components/material-ui/example/components/inputs/ButtonGroup';
import CheckBox from '../../../../components/material-ui/example/components/inputs/CheckBox';
import FloatingActionButtons from '../../../../components/material-ui/example/components/inputs/FloatingActionButtons';


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
                        <AutoComplete />
                        <Button />
                        <ButtonGroup/>
                        <CheckBox/>
                        <FloatingActionButtons/>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
