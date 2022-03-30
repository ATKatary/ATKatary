import "./landing.css";
import React from "react";
import NavBar from  "../navbar/navbar.js";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import img2 from '../media/images/pic2.png';
import img3 from '../media/images/pic3.png';
import img4 from '../media/images/pic4.png';
import img16 from '../media/images/pic16.png';
import img15 from '../media/images/pic15.png';
import img7 from '../media/images/pic7.png';
import MapSvg from '../media/svgs/mapsvg';

function Landing() {
  const drawings = [img2, img16, img3, img4, img15, img7];
  return (
    <>
    <div id="root" className=" width-100 flex column align-center">
        <NavBar />
        <div id="intro" className="appear-animation flex justify-around align-center width-100 profile">
          <div className="black profile-text flex column">
            <p className="font-65px heavy margin-0">HELLO</p>
            <p className="font-32px extrabold margin-0">I am Ahmed Katary</p>
            <p className="font-26px bold margin-0">Computer Scientist | Artist</p>
            <p className="font-22px regular margin-0">Welcome to my slice of the web!</p>
          </div>
          <div className="circle sqr-300px flex align-center justify-center box-shadow-40">
            <div className="circle sqr-250px  flex align-center gray justify-center box-shadow-75">
              <div className="circle profile-image sqr-230px"></div>
            </div>
          </div>
        </div>
        <MapSvg />
        
        {/** About **/}
        {/* <div className="flex column align-center width-100 appear-animation">
          <p class="font-3-5vw extrabold black margin-0 margin-top-20px">About</p>
          <p class="logo-mit font-3vw width-60 black flex align-center text-center margin-0 margin-bottom-20px">I am a computer science and enginering student at Massachusets Institute of Techonology (MIT) interested in machine learning, user interfaces, and design. </p>
        </div> */}

        {/** Projects **/}
        <div className="flex column align-center width-100 appear-animation">
          <p class="font-3-5vw black extrabold">Projects</p>
          <div className="width-100 height-75vw margin-20px flex justify-center">
            <Button className="project-box box-shadow cycle-start1-animation flash padding-0">
              <Button className="green opacity-90 width-100 height-100 pointer flex column">
                <Typography className="white font-2-5vw">Flash Light</Typography>
                <Typography className="white font-2vw">Mechanical</Typography>
              </Button>
            </Button>
            <Button className="project-box box-shadow cycle-start5-animation simba padding-0">
              <Button className="purple opacity-90 width-100 height-100 pointer flex column">
                <Typography className="white font-2-5vw">Simba</Typography>
                <Typography className="white font-2vw">Mechanical</Typography>
              </Button>
            </Button>
            <Button className="project-box box-shadow cycle-start2-animation padding-0">
              <Button className="orange opacity-90 width-100 height-100 pointer flex column">
                <Typography className="white font-2-5vw">Online IDE</Typography>
                <Typography className="white font-2vw">Software</Typography>
              </Button>
            </Button>
            <Button className="project-box box-shadow cycle-start3-animation red pointer"></Button>
            <Button className="project-box box-shadow cycle-start4-animation blue pointer"></Button>
          </div>
        </div>

        {/** Art **/}
        <p className="font-3-5vw extrabold black margin-10px">Art Gallery</p>
        <Stack direction="horizontal" className="width-100 slideshow scroll appear-animation">
          {drawings.length > 0 ?
            drawings.map((item, index) => {
                return (<img className="box-shadow margin-5px enlarge image" src={item} alt=""/>);
                }) :  <></>}
        </Stack>
        {/** Projects/Research **/}
        

        {/** Papers / Publications **/}
        

        {/** Education / Work **/}
        

        {/** Group Three: Travel **/}
        

        {/** Group Four: Contact **/}
        
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Landing;
