import * as React from 'react';
import Grid from '@mui/material/Grid';
import Slider from "react-slick";
import ComplexGrid from './complexgrid';


const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding:40
  };

 function CircleGrid(props) {
  return (  


    <div>
        <Slider {...settings}>
       
        { props.shape ?  props.circleimage.map((img,index)=>(
            <ComplexGrid image={img.imgPath}  />
         )) : props.circleimage.map((img,index)=>(
          <ComplexGrid image={img.imgPath}  />
       )) }

         
         
    
        </Slider>
      </div>
    
  );
}

export default CircleGrid;
