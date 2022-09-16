import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ProgressDerterminate from './ProgressDerterminate';
import ProgressInteractiveIntegration from './ProgressInteractiveIntegration';
import ProgressCircularLabel from './ProgressCircularLabel';
import ProgressLinear from './ProgressLinear';
import ProgressLinearDeterminate from './ProgressLinearDeterminate';
import ProgressLinearBuffer from './ProgressLinearBuffer';

export default function () {
    return (
        <>
            <h1>Progress</h1>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Box>
            <ProgressDerterminate />
            <ProgressInteractiveIntegration />
            <Box sx={{ display: 'flex' }}>
                <ProgressCircularLabel />
            </Box>
            <ProgressLinear/>
            <ProgressLinearDeterminate/>
            <ProgressLinearBuffer/>
        </>
    );
}
