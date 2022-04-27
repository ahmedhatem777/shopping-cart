import { Box } from "@mui/system";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer>
            <Box className="footer-box" color='white' textAlign='center'>
                <p>ahmedhatem777@hotmail.com</p>
                <LinkedInIcon/>
                <GitHubIcon/>
            </Box>
        </footer>
    )
}

export default Footer;

