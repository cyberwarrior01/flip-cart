import {AppBar, Toolbar , Box , styled} from '@mui/material';
import flip_logo from '/flip_logo.svg'
import Searchbar from './search';
import Buttons from './custom_buttons';

const Appbar = styled(AppBar)`
background : #ffffff;
box-shadow : none;
` 

const Navbar = ()=>{

    return(
        <>
        <Appbar>
            <Toolbar>
                <Box>
                    <img src= {flip_logo} alt="logo"/>
                </Box>
                <Box>
                    <Searchbar/>
                </Box>
                <Box>
                    <Buttons/>
                </Box>
            </Toolbar>
        </Appbar>
        </>
    )
}

export default Navbar;