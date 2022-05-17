import './App.css';
import Navbar from './component/navbar';
import Courosel from './component/courosel';
import ComplexGrid from './component/complexgrid';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import CircleGrid from './component/circlegrid';
import Banner from './component/gifbanner';
import image1 from './circleimage/aa.png'
import image2 from './circleimage/bb.png'
import image3 from './circleimage/cc.png'
import image4 from './circleimage/dd.png'
import image5 from './circleimage/ee.png'
import image6 from './circleimage/ff.png'
import image7 from './circleimage/gg.png'

const imagessssss = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:image1,
  },
  {
    label: 'Bird',
    imgPath:image2,
  },
  {
    label: 'Bali, Indonesia',
    imgPath:image3,
  },
  {
    label: 'Goč, Serbia',
    imgPath:image4,
  },
  {
    label: 'Indonesia',
    imgPath:image5,
  },
  {
    label: 'Iran',
    imgPath:image6,
  },
  {
    label: 'Iran',
    imgPath:image7,
  },
  {
    label: 'Iran',
    imgPath:image1,
  },
  {
    label: 'Iran',
    imgPath:image2,
  },
  {
    label: 'Iran',
    imgPath:image4,
  },
];


const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://k.nooncdn.com/cms/pages/20220512/fa19c97b89fdb59cdf96b2505dbf7908/en_dk_uae-slider-01.png',
  },
  {
    label: 'Bird',
    imgPath:
      'https://k.nooncdn.com/cms/pages/20220428/1747658ec328951b40462b55f6285f18/en_hero.gif',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_slider-01.png',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://k.nooncdn.com/cms/pages/20220310/bb8ec300f66b4fc78e65c2eb8a25eda5/en_hero.jpg',
  },
];


function App() {
  return (
    <div className="App">
         <Navbar />

         <Container maxWidth={'xl'} >
         <Courosel />
         <CircleGrid circleimage={imagessssss} shape={true}  />
       
         
         <Grid item xs={12} lg={12} sm={12}  container sx={{ backgroundColor:'#CCC', }} p={2} >
         <ComplexGrid image={'https://z.nooncdn.com/products/tr:n-t_240/v1610530302/N43241184A_1.jpg'} heading={'Watch'} />
         <ComplexGrid image={'https://z.nooncdn.com/products/tr:n-t_240/v1648570075/N50910944A_1.jpg'} heading={'Phone'}   />
         <ComplexGrid image={'https://z.nooncdn.com/products/tr:n-t_240/v1633343872/N40633047A_1.jpg'}  heading={'Console'} />
         <ComplexGrid image={'https://z.nooncdn.com/products/tr:n-t_240/v1635188530/N11069367A_1.jpg'} heading={'Led Tv'}  />
         </Grid >

         <Courosel />

         <Grid item xs={12} lg={12} sm={12}  container sx={{ backgroundColor:'#CCC', }} p={2} >

        <img src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mega-deal-title-01.png'></img>
         <ComplexGrid image={'https://z.nooncdn.com/products/tr:n-t_240/v1648195487/N31981369A_1.jpg'} heading={'Mug'} />
         <ComplexGrid image={'https://z.nooncdn.com/products/tr:n-t_240/v1635748093/N22547721A_5.jpg'} heading={'Table'}  />
         <ComplexGrid image={'https://z.nooncdn.com/products/tr:n-t_240/v1650966443/N42984416A_1.jpg'} heading={'Scooty'}  />
         <ComplexGrid image={'https://z.nooncdn.com/products/tr:n-t_240/v1632919229/N44288783A_1.jpg'} heading={'Vaccum'}  />
         </Grid >
         
         <Grid container p={2}>
         <Banner image={'https://k.nooncdn.com/cms/pages/20211205/facb109f7445b0f993137ce467180ea2/en_noonsection-01.gif'}   />
         </Grid>

         <CircleGrid circleimage={imagessssss} shape={true} cardimages={images} />


         <Grid item xs={12} lg={12} sm={12}  container sx={{ backgroundColor:'#CCC', }} p={2} >

         <Grid lg={12}>
         <Typography gutterBottom variant="h6" component="div" m={0} sx={{textAlign:'left',}}>
              Recommended for you
        </Typography>
        </Grid>
        
         <ComplexGrid image={'https://z.nooncdn.com/products/tr:n-t_240/v1610530302/N43241184A_1.jpg'} heading={'Watch'} />
         <ComplexGrid image={'https://z.nooncdn.com/products/tr:n-t_240/v1648570075/N50910944A_1.jpg'} heading={'Phone'}   />
         <ComplexGrid image={'https://z.nooncdn.com/products/tr:n-t_240/v1633343872/N40633047A_1.jpg'}  heading={'Console'} />
         <ComplexGrid image={'https://z.nooncdn.com/products/tr:n-t_240/v1635188530/N11069367A_1.jpg'} heading={'Led Tv'}  />
         </Grid>
         </Container>

    </div>
  );
}

export default App;
