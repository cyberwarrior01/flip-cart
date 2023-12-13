
import {Dialog , Box ,TextField , Typography , Button , styled} from '@mui/material'

const LoginDialogue =({open , setOpen})=>{

const handelClose = ()=>{
    setOpen(false);
};

const MainBox = styled(Box)`
 height: 80vh;
 width: 98vh;
`;

const Image = styled(Box)`
background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png
) center  85% no-repeat ;
height:100%;
width:40%;
padding: 45px 35px;
`

const Wrapper = styled(Box)`
display:flex;
flex-direction : column;
padding: 45px 35px;
flex:1;
& > div , & > button , & > p {
    margin-top: 15px;
}
`

const LoginButton = styled(Button)`
text-transform : none;
background : #2874f0;
color : #fff;
&:hover {
    background-color: #fb641b ; /* Set to 'transparent' to remove background color */
    box-shadow: 0 15px 4px 0 rgb(0 0 0 / 20% ); /* Set to 'none' to remove box shadow */
    /* Add any other styles you want to override for hover effect */
  }
`
const RequestButton = styled(Button)`
text-transform : none;
background : #fb641b;
color : #fff;
box-shadow: 0 15px 4px 0 rgb(0 0 0 / 20% );
&:hover {
    background-color: #2874f0 ; /* Set to 'transparent' to remove background color */
    box-shadow: none; /* Set to 'none' to remove box shadow */
    /* Add any other styles you want to override for hover effect */
  }
`

    return (
        <Dialog open={open} onClose={handelClose}>
            <MainBox>
                <Box style={{ display: 'flex', height : '100%' }}>
                <Image>
                <Typography variant="h5">Login</Typography>
                <Typography style={{marginTop:'10%'}}>Get access to your Orders, Wishlist and Recommendations</Typography>

                </Image>

                <Wrapper>
                    <TextField  label="Enter Email/Mobile number" variant="standard" />
                    <TextField  label="Enter Password" variant="standard" />
                    <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                    <LoginButton>Login</LoginButton>
                    <Typography>Or</Typography>
                    <RequestButton>Request OTP</RequestButton>
                    <Typography>New to Flipkart? Create an account</Typography>
                </Wrapper>
                </Box>
            </MainBox>
        </Dialog>
    )
}
export default LoginDialogue;