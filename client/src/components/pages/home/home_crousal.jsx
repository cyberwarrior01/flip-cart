import { Box , styled} from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import BannerData from './data2'

const responsive = {
   
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Banner = styled(Box)`
  
  `
  const Pic = styled('img')`
  width : 100%;
  height : 100%;
  `

const Hcrousal = ()=>{
    return (
        <>
        <Banner>
        <Carousel responsive = {responsive}
        infinite={true} 
        swipeable={false}
  draggable={false}
  autoPlay={true}
  autoPlaySpeed={3000}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
        
        >
            {
                BannerData.map((data, index)=>(
                    // <Pic src={data.url} alt='img'/>
                    <Pic key={index} src={data.url} alt={`Banner ${index + 1}`} />
                ))
            }
        </Carousel>
        </Banner>
        </>
    )
}

export default Hcrousal;