import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PaperElevation from './PaperElevation';

export default function () {
    return (
        <>
            <h1>Paper</h1>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
                <Paper elevation={0} />
                <Paper />
                <Paper elevation={3} />
                <Paper variant="outlined" />
                <Paper variant="outlined" square />
            </Box>
            <PaperElevation/>
        </>
    );
}
