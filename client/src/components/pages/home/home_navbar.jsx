import { Box, Typography , styled } from '@mui/material';
import NavData from './data';

const Components = styled(Box)`
display: flex;
align-items: center;
justify-content: space-between;
gap: 10px;

`

const Text = styled(Typography)`
font-size: 14px;
font-family : sans-serif;
color : #333333;
letter-spacing : normal;
text-align: center;
font-weight : bold;
`

const Content = styled(Box)`
// background : red;
height : 120px;
width:2500px;
align-items: center;
text-align : center;




`

const Pic = styled('img')`
border-radius: 50%;
width : 60px;
margin-top:15px;

`



const NavBar = () => {
  return (
    <>
    
    <Components>
        {
            NavData.map((data, index) => (
                <Content key={index}>
                    <Pic  src={data.url} alt = "nav"/>
                    <Text>{data.text}</Text>
                </Content>
            ))

        }
    </Components>
      
    </>
  );
};

export default NavBar;
