// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import logo from "../../../assets/images/auth/ERP.png"

const AuthBackground = () => {
    const theme = useTheme();
    return (
        <Box sx={{ position: 'absolute', filter: 'blur(18px)', zIndex: -1, bottom: 0 }}>
                    <img src={logo} alt="Logo" width="800" />

        </Box>
    );
};

export default AuthBackground;
