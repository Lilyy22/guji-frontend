import { useTheme } from '@mui/material/styles';
import logo from "../../assets/images/auth/ERP.png"

const Logo = () => {
    const theme = useTheme();

    return (
        <img src={logo} alt="Logo" width="100" />
    );
};

export default Logo;
