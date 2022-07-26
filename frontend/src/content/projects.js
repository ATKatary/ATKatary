import { Typography } from '@mui/material';
import './content.css';
import {ImageText, TextImage} from '../personal_util/components';

export function Projects(props) {
  const style = {fontSize: "1.5vw", fontFamily: "'Annie Use Your Telescope'", color: "#000", marginLeft: "30px"};
  const projects = {
    'ployem': `A Collection of open source projects that were the result of months of interviews and study of the needs of highschool students from under represented communities`,
    'msa': `A website for the MIT Muslim Student Association to showcase thier information and events`,
    'starFront': `A single player online game, completed along side 2 of my friends over the course of 2 weeks`,  
    'iLab': `A free and open source interpreter lab, inspired by jupyter notebook, supporting python, javascript, latex, and more`,
    'simba': `I was looking for a major, wanted to explore 3D printing, and had a great friends ready to help. So over IAP, we created a team and put together 2 3D printers -- Resputen for my friend and Simba for me.`
  }

  return (
    <div style={{color: "black", height: "91%"}} id="projects" className="none column align-center scroll no-scrollbar">
      {/*** Ployem ***/}
      <ImageText image={props.images("./projects/project0.png")} style={style} name={"Ployem"} text={projects['ployem']}/>

      {/*** MIT MSA ***/}
      <TextImage image={props.images("./projects/project1.png")} style={style} name={"MIT MSA"} text={projects['msa']} onClick={() => {window.location = "https://www.mit-msa.com"}}/>
      
      {/*** Star Front ***/}
      <ImageText image={props.images("./projects/project2.png")} style={style} name={"StarFront"} text={projects['starFront']}/>

      {/*** iLab ***/}
      <TextImage image={props.images("./projects/project3.png")} style={style} name={"iLab"} text={projects['iLab']}/>

      {/*** Simba ***/}
      <ImageText image={props.images("./projects/project4.png")} style={style} name={"Simba"} text={projects['simba']}/>
    </div>
  )
}
