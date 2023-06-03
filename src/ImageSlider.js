import { getByDisplayValue } from '@testing-library/react';
import React from 'react'
import { useState } from 'react';
import './index.css';


const ImageSlider = ({slides}) => {
    const [currentIndex, setcurrentIndex] = useState(0);
   
    const sliderCSS = {
       width: "100%",
       height: "100%",
       borderRadius: "5px",
       backgroundPosition: "center",
       backgroundSize: "cover",
       backgroundImage: `url( ${slides[currentIndex].url} )`
       /* */ 
    };
    const leftArrow = { 
        position: 'absolute',
        top: '50%',
        transform: 'translate(0 , -50%)',
        fontSize: '45px',
        left: '15px',
        opacity: '0.9',
        color: '#ffff',
        cursor: 'pointer',
        zIndex: '1'
    };
    const rightArrow = {
        position: 'absolute',
        top:'50%',
        transform: 'translate( 0,-50%)',
        right: '15px',
        opacity: '0.9',
        fontSize: '45px',
        color: '#ffff',
        cursor: 'pointer',
        zIndex: '1',
    };

    //Last Row CSS
        const allPhotoCSS = {
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            padding:'10px'
        };
        const photo = {
            height: '65px',
            width: '65px',
            padding: '5px',
            
        };

        const highlighted = {
            border: '4px grey solid',
            height: '75px',
            width: '75px',
        }
    function moveBack( ) {
        const firstSlide = currentIndex === 0 ? true : false;
        const newIndex = firstSlide ? slides.length -1 : currentIndex - 1;
        setcurrentIndex(newIndex);
        console.log( currentIndex ); 
    }
    function moveFront( ) {
       const lastSlide = currentIndex === slides.length -1 ? true : false;
       const newIndex = lastSlide ? 0 : currentIndex + 1;
       setcurrentIndex(newIndex); 
       console.log( currentIndex );
    }

    //last row functionns
    function putImage( image) {
       console.log( " hello!")
    }
    const goToSlide = (imageId) =>{
        setcurrentIndex( imageId);
    }

  return (
    <>
        <div style={{height:'100%' , position: 'relative'}}>
            <div style={leftArrow} onClick={moveBack}>&#8636;</div>
            <div style={rightArrow} onClick={moveFront}>&#8640;</div>
            <div style={ sliderCSS }></div>
        </div>
        <div style={allPhotoCSS}>
            {slides.map(( image , imageId ) => (
                (image.id === currentIndex) ?
                
                    <img onClick={()=> goToSlide( imageId)} src={image.url} style = {highlighted}/>
                    :
                    
                    <img onClick = {()=> goToSlide( imageId ) } style={photo} src={image.url}/>
                     
             ))}
        </div>
    </>

  )
}

export default ImageSlider

/*import React from 'react'

                <img style={photo} src={image.url} {(image.id == currentIndex ? style = {highlighted} : {})} />

const AllPhotos = ({slides}) => {
    const allPhotoCSS = {
        marginTop: '50px',
    };
    const photo = {
        height: '65px',
        width: '65px',
        padding: '5px'
    };

  return (
    <div style={allPhotoCSS}>
      {slides.map(( image ) => (
        <img style={photo} src={image.url} />
      ))}
    </div>
  )
}

export default AllPhotos

/*
function ImagesComponent() {
  return (
    
  );
}
*/