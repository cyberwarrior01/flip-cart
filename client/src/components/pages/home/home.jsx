import {Box , styled} from '@mui/material'
import NavBar from './home_navbar';
import Hcrousal from './home_crousal';

const Banner = styled(Box)`
margin:71px 11px 0px 11px;
// margin-right : 50px;
background : #fff;
`
const Banner2 = styled(Box)`
margin:10px 11px 0px 11px;
// margin-right : 50px;
background : #fff;
`

const Home = ()=>{
    return(
        <>
        <Banner>
            <NavBar/>
        </Banner>
        <Banner2>
            <Hcrousal/>
        </Banner2>
        
        </>
    )
}

export default Home;