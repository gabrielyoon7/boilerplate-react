import * as React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../../components/material-ui/dashboard/menu/dashboard/budget';
import { TotalCustomers } from '../../components/material-ui/dashboard/menu/dashboard/total-customers';
import { TasksProgress } from '../../components/material-ui/dashboard/menu/dashboard/tasks-progress';
import { TotalProfit } from '../../components/material-ui/dashboard/menu/dashboard/total-profit';
// import { Sales } from '../../components/material-ui/dashboard/menu/dashboard/sales';
// import { TrafficByDevice } from '../../components/material-ui/dashboard/menu/dashboard/traffic-by-device';
// import { LatestProducts } from '../../components/material-ui/dashboard/menu/dashboard/latest-products';
// import { LatestOrders } from '../../components/material-ui/dashboard/menu/dashboard/latest-orders';

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
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Budget />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TotalCustomers />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TasksProgress />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TotalProfit sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              {/* <Sales /> */}
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              {/* <TrafficByDevice sx={{ height: '100%' }} /> */}
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              {/* <LatestProducts sx={{ height: '100%' }} /> */}
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              {/* <LatestOrders /> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
