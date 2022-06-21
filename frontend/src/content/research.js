import './content.css';
import { Typography } from '@mui/material';

export function Research(props) {
  const style = {fontSize: "1.5vw", fontFamily: "'Annie Use Your Telescope'", color: "#000", marginLeft: "30px"};

  return (
    <div style={{color: "black", height: "91%"}} id="research" className="none column align-center scroll no-scrollbar">
      {/*** HCIE ***/}
      <div className="flex margin-30px align-center">
        <img alt="" src={props.images("./research/csail.png").default} style={{height: "10vw"}} className="pointer"/>
        <Typography style={style}>
          <b>Computer Science</b>
          <br></br>
          Worked in the lab of Professor Stephanie Muller under Phd candidate Faraz Faruqi to helped investigate situational awareness for 3D models. My tasks involved investigating the effects of hyper paramters on fabrication of style transferred 3D mdoels, 
          automating multiple style transfer based on the work of the Text2Mesh paper, and creating UIs for projects in the lab. 
        </Typography>
      </div>

      {/*** Physics ***/}
      <div className="flex margin-30px align-center">
        <Typography style={style}>
          <b>Physics</b>
          <br></br>
          Worked under Professor Markus Klute to model benefits of new HF nose. Was on a team of 4 met once a week to collaborate and produce code simulating expected benefits of new HF nose. 
        </Typography>
        <img alt="" src={props.images("./research/physcis.png").default} style={{height: "10vw"}} className="pointer"/>
      </div>
    </div>
  )
}
