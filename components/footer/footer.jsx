import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer>
            <Box className="footerBox" >
                <p>AHMED HATEM © 2022</p>

                <a href="https://github.com/ahmedhatem777" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                <a href="https://tinyurl.com/2p8zwjf6" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
                
                <p><a href="mailto:ahmedhatem777@hotmail.com"><i>ahmedhatem777@hotmail.com</i></a></p>
            </Box>
        </footer>
    )
}

export default Footer;