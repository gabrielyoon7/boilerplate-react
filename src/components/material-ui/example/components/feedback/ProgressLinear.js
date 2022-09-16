import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Stack } from '@mui/material';

export default function () {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <LinearProgress />
                <LinearProgress color="secondary" />
                <LinearProgress color="success" />
                <LinearProgress color="inherit" />
            </Stack>
        </Box>
    );
}
