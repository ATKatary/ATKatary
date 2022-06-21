import { Typography } from '@mui/material';
import './content.css';

export function Projects(props) {
  const style = {fontSize: "1.5vw", fontFamily: "'Annie Use Your Telescope'", color: "#000", marginLeft: "30px"};
  
  return (
    <div style={{color: "black", height: "91%"}} id="projects" className="none column align-center scroll no-scrollbar">
      {/*** Ployem ***/}
      <div className="flex margin-30px">
        <img alt="" src={props.images("./projects/project0.png").default} style={{width: "7vw"}} className="pointer"/>
        <Typography style={style}>
          <b>Ployem</b>
          <br></br>
          A Collection of open source projects that were the result of months of interviews and study of the needs of 
          highschool students from under represented communities
        </Typography>
      </div>

      {/*** MIT MSA ***/}
      <div className="flex margin-30px">
        <Typography style={style}>
        <b>MIT MSA</b>
        <br></br>
        A website for the MIT Muslim Student Association to showcase thier information and events
        </Typography>
        <img alt="" src={props.images("./projects/project3.png").default} style={{width: "7vw"}} className="pointer"/>
      </div>

      {/*** Star Front ***/}
      <div className="flex margin-30px">
        <img alt="" src={props.images("./projects/project1.png").default} style={{width: "8vw"}} className="pointer"/>
        <Typography style={style}>
        <b>StarFront</b>
        <br></br>
        A single player online game, completed along side 2 of my friends over the course of 2 weeks
        </Typography>
      </div>

      {/*** iLab ***/}
      <div className="flex margin-30px">
        <Typography style={style}>
        <b>iLab</b>
        <br></br>
        A free and open source interpreter lab, inspired by jupyter notebook, supporting python, javascript, latex, and more
        </Typography>
        <img alt="" src={props.images("./projects/project2.png").default} style={{width: "13vw"}} className="pointer"/>
      </div>

      {/*** Simba ***/}
      <div className="flex margin-30px">
      <img alt="" src={props.images("./simba1.png").default} style={{width: "10vw"}}/>
        <Typography style={style}>
        <b>Simba</b>
        <br></br>
        I was looking for a major, wanted to explore 3D printing, and had a great friends ready to help. So over IAP, we created a team and put together 2 3D printers -- Resputen for my friend and Simba for me.
        </Typography>
      </div>
    </div>
  )
}
