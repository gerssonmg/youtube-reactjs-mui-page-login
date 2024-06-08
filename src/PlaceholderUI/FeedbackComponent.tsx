import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';


const Image = styled('img')({
    width: '100%',
});

function SkeletonChildrenDemo(props: { loading?: boolean }) {
    const { loading = false } = props;

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', maxHeight: "40vh", maxWidth: "40vw" }}>
                <Box sx={{ margin: 1 }}>
                    {loading ? (
                        <Skeleton variant="circular">
                            <Avatar />
                        </Skeleton>
                    ) : (
                        <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                    )}
                </Box>
                <Box sx={{ width: '100%' }}>
                    {loading ? (
                        <Skeleton width="100%">
                            <Typography>.</Typography>
                        </Skeleton>
                    ) : (
                        <Typography>Ted</Typography>
                    )}
                </Box>
            </Box>
            {loading ? (
                <Skeleton variant="rectangular" width="100%">
                    <div style={{ paddingTop: '57%' }} />
                </Skeleton>
            ) : (
                <Image
                    src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                    alt=""
                />
            )}
        </div>
    );
}

function SkeletonChildren() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const [loading2, setLoading2] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading2(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);


    const [loading3, setLoading3] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading3(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);





    return (
        <>
            <Grid container spacing={8}>
                <Grid item xs>
                    <SkeletonChildrenDemo loading={loading} />
                </Grid>
                <Grid item xs>
                    <SkeletonChildrenDemo loading={loading} />
                </Grid>
                <Grid item xs>
                    <SkeletonChildrenDemo loading={loading} />
                </Grid>
                <Grid item xs>
                    <SkeletonChildrenDemo loading={loading} />
                </Grid>
            </Grid>
            <Grid container spacing={8}>
                <Grid item xs>
                    <SkeletonChildrenDemo loading={loading2} />
                </Grid>
                <Grid item xs>
                    <SkeletonChildrenDemo loading={loading2} />
                </Grid>
                <Grid item xs>
                    <SkeletonChildrenDemo loading={loading2} />
                </Grid>
                <Grid item xs>
                    <SkeletonChildrenDemo loading={loading2} />
                </Grid>
            </Grid>
            <Grid container spacing={8}>
                <Grid item xs>
                    <SkeletonChildrenDemo loading={loading3} />
                </Grid>
                <Grid item xs>
                    <SkeletonChildrenDemo loading={loading3} />
                </Grid>
                <Grid item xs>
                    <SkeletonChildrenDemo loading={loading3} />
                </Grid>
                <Grid item xs>
                    <SkeletonChildrenDemo loading={loading3} />
                </Grid>
            </Grid>

        </>
    );
}

export default function FeedbackComponents() {
    return (
        <>

            <SkeletonChildren />
            {
                true && (
                    <Stack spacing={1}>

                        <Skeleton
                            sx={{ bgcolor: 'pink' }}
                            variant='rounded'
                            width={243}
                            height={400}
                        />

                        {/* For variant="text", adjust the height via font-size */}
                        <Skeleton width={243}
                            variant="text" sx={{ fontSize: '4rem' }} />

                        {/* For other variants, adjust the size with `width` and `height` */}
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="circular" width={800} height={80} />
                        <Skeleton animation={false} variant="rectangular" width={210} height={60} />
                        <Skeleton animation="pulse" variant="rectangular" width={210} height={60} />
                        <Skeleton animation="wave" variant="rectangular" width={210} height={60} />
                        <Skeleton animation="wave" variant="rectangular" width={210} height={60} />
                        <Skeleton animation="wave" variant="rectangular" width={210} height={60} />
                        <Skeleton variant="rectangular" width={210} height={60} />
                        <Skeleton variant="rounded" width={210} height={60} />
                        <Skeleton variant="rounded" width={210} height={60} />
                        <Skeleton variant="rounded" width={210} height={60} />
                    </Stack>)
            }
        </>
    );
}