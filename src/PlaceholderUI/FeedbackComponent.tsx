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


const listThumb = [
    "https://i.ytimg.com/vi/dXgmJWvO5DI/maxresdefault.jpg",
    "https://i.ytimg.com/vi/kfrgOAmzQ68/maxresdefault.jpg",
    "https://i.ytimg.com/vi/Xxo-bMzD5cM/maxresdefault.jpg",
    "https://i.ytimg.com/vi/Ztv5Fz51xs8/maxresdefault.jpg",
    "https://i.ytimg.com/vi/0pwR4i028LM/maxresdefault.jpg",
    "https://i.ytimg.com/vi/HjE-HLca2fw/maxresdefault.jpg",
    "https://i.ytimg.com/vi/4c6-zABJmQE/maxresdefault.jpg"
]

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
                        <Avatar src="https://yt3.ggpht.com/9P0t5Seaabd_wcm2wxy7UO39RV-gWPA6PoFY7-FILhvs_WHqRahS84XKvWPTfMoDhuNzd286=s48-c-k-c0x00ffffff-no-rj" />
                    )}
                </Box>
                <Box sx={{ width: '100%' }}>
                    {loading ? (
                        <Skeleton width="100%">
                            <Typography>.</Typography>
                        </Skeleton>
                    ) : (
                        <Typography>Gérson Aguiar | Dev</Typography>
                    )}
                </Box>
            </Box>
            {loading ? (
                <Skeleton variant="rectangular" width="100%">
                    <div style={{ paddingTop: '57%' }} />
                </Skeleton>
            ) : (
                <Image src={listThumb[Math.floor(Math.random() * listThumb.length)]} alt="Random Thumbnail" />
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
                        <Skeleton variant="circular" width={40} height={40} />
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