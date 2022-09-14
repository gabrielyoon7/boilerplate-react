import * as React from 'react';
import { Box, Container, Grid, Stack } from '@mui/material';
import AutoComplete from '../../../../components/material-ui/example/components/inputs/AutoComplete';
import Button from '../../../../components/material-ui/example/components/inputs/Button';
import ButtonGroup from '../../../../components/material-ui/example/components/inputs/ButtonGroup';
import CheckBox from '../../../../components/material-ui/example/components/inputs/CheckBox';
import FloatingActionButtons from '../../../../components/material-ui/example/components/inputs/FloatingActionButtons';
import RadioButton from '../../../../components/material-ui/example/components/inputs/RadioButton';
import Rating from '../../../../components/material-ui/example/components/inputs/Rating';
import Selects from '../../../../components/material-ui/example/components/inputs/Selects';
import Sliders from '../../../../components/material-ui/example/components/inputs/Sliders';
import Switches from '../../../../components/material-ui/example/components/inputs/Switches';
import TextFields from '../../../../components/material-ui/example/components/inputs/TextFields';
import TransferList from '../../../../components/material-ui/example/components/inputs/TransferList';
import ToggleButtons from '../../../../components/material-ui/example/components/inputs/ToggleButtons';


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
                        <ButtonGroup />
                        <CheckBox />
                        <FloatingActionButtons />
                        <RadioButton />
                        <Rating />
                        <Selects />
                        <Sliders/>
                        <Switches/>
                        <TextFields/>
                        <TransferList/>
                        <ToggleButtons/>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
