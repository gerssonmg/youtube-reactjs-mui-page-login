import { Box, Button, IconButton, Typography } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext } from "../../App"
import { useTheme } from '@mui/material/styles';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

export function Toggle() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}
        >
            {theme.palette.mode === 'dark' ? "Modo Avião" :
                "O dia esta ensolarado"}
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <NightsStayIcon /> : <FlightTakeoffIcon />}
            </IconButton>
        </Box>
    );
}
const DarkModeCustom = () => {
    const colorMode = useContext(ColorModeContext)

    return (
        <Box display="flex" flexDirection="column" >
            <Typography>
                Oi, darkmode
            </Typography>
            <Button variant='contained' onClick={colorMode.toggleColorMode}>
                Click
            </Button>
            <Toggle />
        </Box>
    )
}

export default DarkModeCustom