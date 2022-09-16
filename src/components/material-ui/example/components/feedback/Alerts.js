import * as React from 'react';
import { Alert, AlertTitle, Box, Button, Collapse, Container, IconButton, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function () {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <h1>Alert</h1>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Stack>
      <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Close me!
          </Alert>
        </Collapse>
        <Button
          disabled={open}
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Re-open
        </Button>
      </Box>
      <Alert variant="outlined" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an info alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="success">
        This is a success alert — check it out!
      </Alert>
      <Alert variant="filled" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert variant="filled" severity="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert variant="filled" severity="info">
        This is an info alert — check it out!
      </Alert>
      <Alert variant="filled" severity="success">
        This is a success alert — check it out!
      </Alert>
    </>
  );
}
