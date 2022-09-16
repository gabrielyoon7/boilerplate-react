import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import SkeletonPulsate from './SkeletonPulsate';
import SkeletonWave from './SkeletonWave';
import SkeletonInferringDimensions from './SkeletonInferringDimensions';

export default function () {
    return (
        <>
            <h1>Skeleton</h1>
            <Stack spacing={1}>
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
                <SkeletonPulsate/>
                <SkeletonWave/>
                <SkeletonInferringDimensions/>
            </Stack>
        </>
    );
}
