import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import TooltipWide from './TooltipWide';
import Box from '@mui/material/Box';

export default function () {
    return (
        <>
            <h1>Tooltip</h1>
            <Tooltip title="Delete">
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            <TooltipWide />
            <Tooltip title="You don't have permission to do this" followCursor>
                <Box sx={{ bgcolor: 'text.disabled', color: 'background.paper', p: 2 }}>
                    Disabled Action
                </Box>
            </Tooltip>
        </>
    );
}
