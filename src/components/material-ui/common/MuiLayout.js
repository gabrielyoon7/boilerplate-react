import { useState } from 'react';
import DashboardNavbar from "./DashboardNavbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import { Box, styled } from "@mui/material";
import { DashboardSidebar } from './DashboardSidebar';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

export default () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <>
            <DashboardLayoutRoot>
                <Box
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    <Outlet />
                </Box>
            </DashboardLayoutRoot>
            <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
            <DashboardSidebar
                onClose={() => setSidebarOpen(false)}
                open={isSidebarOpen}
            />
        </>
    )
}