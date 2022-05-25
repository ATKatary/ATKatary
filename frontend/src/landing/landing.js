import "./landing.css";
import React from "react";
import {} from "@mui/material";
import {Card} from '../gallery/utils.ts';
import NavBar from  "../navbar/navbar.js";
import {ProjectSlideShow, Shuffle, FallingBlocks} from "../gallery/gallery";

/*** GLobal Constants ***/
const project = (title, description, color, link, img=undefined) => {return {'title': title, 'description': description, 'color': color, 'link': link, 'img': img}}

function Landing() {
  const images = require.context('../media/images', true);
  const drawings = [];
  const projects = [project("Project 1", "Category", "green", "/"),
                    project("Project 2", "Category", "purple", "/", images(`./projects/project1.png`)),
                    project("Project 3", "Category", "orange", "/", images(`./projects/project2.png`)),
                    project("Project 4", "Category", "blue", "/", images(`./projects/project3.png`)),
                    project("Project 5", "Category", "red", "/")];
const [w, h] = [120, 40]
const skills = [new Card(w, h, "javascript"), new Card(w, h, "html"),
                  new Card(w, h, "python"), new Card(w, h, "cv"),
                  new Card(w, h, "java"), new Card(w, h, "typescript"),
                  new Card(w, h, "reactjs"), new Card(w, h, "django"),
                  new Card(w, h, "pytorch"), new Card(w, h, "tensorflow"),
                  new Card(w, h, "scikit"), new Card(w, h, "nltk"),]

  for (let imgNum = 0; imgNum < 6; imgNum++) drawings.push(images(`./drawings/pic${imgNum}.png`));

  return (
    <>
    <div id="root" className=" width-100 flex column align-center">
        {/** Intro **/}
        <div id="intro" className="appear-animation column flex justify-between align-self-start width-100 height-60vw blue">
          <NavBar color="#fff"/>
          <div className="white profile-text flex column">
            <p className="heavy margin-0" style={{fontSize: "12vw"}}>HELLO</p>
            <p className="extrabold margin-0" style={{fontSize: "7vw"}}>I am Ahmed Katary</p>
            <p className="bold margin-0" style={{fontSize: "4vw"}}>Computer Scientist | Artist</p>
            <p className="regular margin-0" style={{fontSize: "3vw"}}>Welcome to my slice of the web!</p>
          </div>
        </div>
        <div className="width-100 flex justify-end-center appear-animation">
          <div className="margin-right-40px box-shadow project-box">
              <div className="square-300 profile-image"></div>
          </div>
        </div>

        {/** Art **/}
        <p className="font-3-5vw regular black margin-30px align-self-start" id="art">Art Gallery</p>
        <Shuffle images={drawings}/>

        {/** Research **/}
        <p className="font-3-5vw regular black margin-30px align-self-end" id="research">Research</p>

        {/** Projects **/}
        <p className="font-3-5vw regular black margin-30px align-self-start" id="projects">Projects</p>
        <ProjectSlideShow projects={projects}/>
        <FallingBlocks cards={skills}/>

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
