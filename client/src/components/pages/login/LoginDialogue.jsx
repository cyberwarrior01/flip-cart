import { useState } from 'react';
import {Dialog , Box ,TextField , Typography , Button , styled} from '@mui/material'
import { autenticateSignup } from '../../../services/api';
import {useAuth} from '../../../context/DataProvider'


// styled elements starting

const MainBox = styled(Box)`
 height: 90vh;
 width: 140vh;
`;
const Image = styled(Box)`
background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png
) center  75% no-repeat ;
height:100%;
width:30%;
padding: 45px 35px;
& > p , & > h5{
    color : #fff;
    font-weight : 600;
}
`;
const Wrapper = styled(Box)`
display:flex;
flex-direction : column;
padding: 45px 35px;
flex:1;

& > div , & > button , & > p {
    margin-top: 25px;
}
`;
const Text = styled(Typography)`
font-size:11px;

`;
const Text1 = styled('p')`
font-size:16px;
`;
const Text2 = styled('p')`
font-size:30px;
`;
const LoginButton = styled(Button)`
text-transform : none;
background : #2874f0;
font-weight : 600;
color : #fff;
&:hover {
    background-color: #fb641b ; /* Set to 'transparent' to remove background color */
    box-shadow: 0 15px 4px 0 rgb(0 0 0 / 20% ); /* Set to 'none' to remove box shadow */
    /* Add any other styles you want to override for hover effect */
  }
`;
const RequestButton = styled(Button)`
text-transform : none;
background : #fb641b;
font-weight : 600;
color : #fff;
box-shadow: 0 15px 4px 0 rgb(0 0 0 / 20% );
&:hover {
    background-color: #2874f0 ; /* Set to 'transparent' to remove background color */
    box-shadow: none; /* Set to 'none' to remove box shadow */
    /* Add any other styles you want to override for hover effect */
  }
`;
const Createaccount = styled(Typography)`
font-size : 14px;
text-align : center;
color: #2874f0;
font-weight : 600;
cursor: pointer;
`;

// styled elements ending


// values for the useState 
const accountIntitialvalues = {
    login : {
        view: 'login',
        heading : "Login",
        subHeading : "Get access to your Orders, Wishlist and Recommendations"
    },
    signup : 
    {
        view: 'signup',
        heading : "Looks like you're new here! ",
        subHeading : "Sign up with your mobile number to get started"
    }
}


// main component 

const LoginDialogue = ({ open, setOpen }) => {
  // dialogue box controller

  const handelClose = () => {
    setOpen(false);
    toggleAccount(accountIntitialvalues.login);
  };
  const toggleSignup = () => {
    toggleAccount(accountIntitialvalues.signup);
  };
  const toggleLogin = () => {
    toggleAccount(accountIntitialvalues.login);
  };

  // singup component and api controler
  const SignupIntitialvalues = {
    Firstname: "",
    Lastname: "",
    Username: "",
    Email: "",
    Password: "",
    Phone: "",
  };
  const onInputChange = (e) => {
    setSignup({ ...Signup, [e.target.name]: e.target.value });
    // console.log(Signup);
  };
  // calling signup api
  const SignupUser = async () => {
     let response =  await autenticateSignup(Signup);
    if(response){
    handelClose();
    setAccount(Signup.Username);
  console.log(Signup.Firstname);
  }
    else{
return;    }
  };
 
  // useState statements
  const [account, toggleAccount] = useState(accountIntitialvalues.login);
  const [Signup, setSignup] = useState(SignupIntitialvalues);
  const {setAccount} =  useAuth();
  

  return (
    // starting of dialogue box
    <Dialog
      open={open}
      onClose={handelClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <MainBox>
        {/* right side box / blue box  */}
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Text2 variant="h5">{account.heading}</Text2>
            <Text1 style={{ marginTop: "10%" }}>{account.subHeading}</Text1>
          </Image>

          {account.view === "login" ? (
            // login page component
            <Wrapper>
              <TextField label="Enter Email/Mobile number" variant="standard" />
              <TextField label="Enter Password" variant="standard" />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton>Login</LoginButton>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Or
              </Typography>
              <RequestButton>Request OTP</RequestButton>
              <Createaccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </Createaccount>
            </Wrapper>
          ) : (
            // signup component or signup page
            <Wrapper>
              <TextField
                label="Enter Firstname"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="Firstname" 
              />
              <TextField
                label="Enter Lastname"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="Lastname"
              />
              <TextField
                label="Enter Username"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="Username"
              />
              <TextField
                label="Enter Email"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="Email"
              />
              <TextField
                label="Enter Password"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="Password"
              />
              <TextField
                label="Enter Phone"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="Phone"
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={() => SignupUser()}>Continue</LoginButton>
              <Createaccount onClick={() => toggleLogin()}>
                Already have an account? Login
              </Createaccount>
            </Wrapper>
          )}
        </Box>
      </MainBox>
    </Dialog>
  );
};
export default LoginDialogue;
    


  
    
   
      