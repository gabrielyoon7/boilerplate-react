import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';
import BadgeVisibility from './BadgeVisibility';

export default function () {
    return (
        <>
            <h1>Badge</h1>
            <Stack spacing={2} direction="row">
                <Badge badgeContent={4} color="primary">
                    <MailIcon color="action" />
                </Badge>
                <Badge badgeContent={4} color="secondary">
                    <MailIcon color="action" />
                </Badge>
                <Badge badgeContent={4} color="warning">
                    <MailIcon color="action" />
                </Badge>
            </Stack>
            <BadgeVisibility />
            <Stack direction="row" spacing={2}>
                <Badge color="secondary" badgeContent={99}>
                    <MailIcon />
                </Badge>
                <Badge color="secondary" badgeContent={100}>
                    <MailIcon />
                </Badge>
                <Badge color="secondary" badgeContent={1000} max={999}>
                    <MailIcon />
                </Badge>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Badge color="secondary" variant="dot">
                    <MailIcon />
                </Badge>
            </Stack>
        </>
    );
}
