import {MdArrowLeft, MdArrowRight} from 'react-icons/md'
import './slider.css'
import styled from "styled-components"
import { SliderItems } from '../../data';
import { useState } from 'react';



const Wrapper = styled.div`
height: 100%;
display: flex;
transition all 1.5s ease;
transform: translate(${(props) => props.slideIndex * -100}vw);

`
const Arrow = styled.div `
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
top: 0;
bottom: 0;
margin: auto;
cursor:pointer;
opacity: 0.5;
z-index: 2;

` ;
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if( direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2 )}
        else {
                setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
            }
        
    };

  return (
    <div className='Slider_Container'>
        
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <MdArrowLeft/>
        </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {SliderItems.map((item) => (
                        <div className="Slider_Slide" style={{backgroundColor:"#f4f4f5"}} >
                        
                        <div className="Img_Container">
                                <img src={item.img} alt="" className="Img_Container_img" />
                        </div>

                        <div className="Info_Container">
                            <div className="Title"> <h1>{item.title}</h1> </div>
                            <p className="Description">{item.description}</p>
                            <button className='Info_Container_button'>SHOP NOW</button>
                        </div>

                    </div>
                ))}
        
            </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <MdArrowRight />
        </Arrow>
      
    </div>
  )
}

export default Slider