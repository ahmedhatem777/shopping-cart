import { Box } from "@mui/system";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer>
            <Box className="footer-box" color='white' textAlign='center'>
                <p class="copyright">AHMED HATEM © 2022</p>
                
                <a href="https://github.com/ahmedhatem777" target="_blank"><GitHubIcon/></a>
                <a href="https://tinyurl.com/2p8zwjf6" target="_blank"><LinkedInIcon/></a>
                
                <p><a href="mailto:ahmedhatem777@hotmail.com"><i>ahmedhatem777@hotmail.com</i></a></p>
            </Box>
        </footer>
    )
}

export default Footer;

