import { Box, Checkbox, FormControl, FormControlLabel, Link, TextField, Typography } from "@mui/material"
import { Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import { GoogleIconSvg } from './CustomIcons';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    return (
        <Box
            // bgcolor="#7159c1"
            display="flex"
            flexDirection="column"
            minHeight="60vh"
            alignItems="center"
            justifyContent="center"
        >
            <Box display="flex" justifyContent="center" alignItems="center" sx={{
                bgcolor: "#9c27b0",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
            }}>
                <LockIcon sx={{ color: "#FFF" }} />
            </Box>
            <Typography
                align="center">
                <strong>
                    Sign in
                </strong>
            </Typography>
            <Box
                mt={4}
                component="form"
                display="flex"
                flexDirection="column"
                maxWidth="360px"
                gap={2}
                width="100%"
            >
                <FormControl>
                    <TextField
                        type="email"
                        placeholder="e-mail"
                        variant="outlined"
                        required
                    />
                </FormControl>
                <TextField
                    type="password"
                    placeholder="******"
                    variant="outlined"
                />

                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" required />}
                    label="Lembrar-me"
                />

                <Button type="submit" onClick={() => alert("Entrar")} variant="contained">Entrar</Button>
            </Box>

            <Box
                width="100%"
                display="flex"
                justifyContent="space-between"
                maxWidth="360px"
                alignItems="center"
            >
                <Link href="" variant="body2">
                    Esqueci minha senha
                </Link>
                <Link href="" variant="body2">
                    Não tem conta?
                    <br />
                    Fazer cadastro
                </Link>
            </Box>

            <Box
                mt={4}
                display="flex"
                flexDirection="column"
                gap={2}
            >
                <Button
                    variant="outlined"
                    startIcon={<GoogleIconSvg />}>
                    Entrar com Google
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<FacebookIcon />}
                >
                    Entrar com Facebook
                </Button>
            </Box>

        </Box>

    )
}

export default Login