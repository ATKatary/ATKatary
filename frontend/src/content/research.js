import './content.css';
import { Typography } from '@mui/material';
import {ImageText, TextImage} from '../personal_util/components';

export function Research(props) {
  const style = {fontSize: "max(1.5vw, 15px)", fontFamily: "'Annie Use Your Telescope'", color: "#000", marginLeft: "30px"};
  const research = {
    'hcie': `Worked in the lab of Professor Stefanie Muller under Phd candidate Faraz Faruqi to helped investigate situational awareness for 3D models. My tasks involved investigating the effects of hyper paramters on fabrication of style transferred 3D models, automating multiple style transfer based on the work of the Text2Mesh paper, and creating UIs for projects in the lab. `,
    'physics': `Worked under Professor Markus Klute to model benefits of new HF nose. Was on a team of 4 met once a week to collaborate and produce code simulating expected benefits of new HF nose.`
  }

  return (
    <div style={{color: "black", height: "91%"}} id="research" className="none column align-center scroll no-scrollbar">
      {/*** HCIE ***/}
      <ImageText image={props.images("./research/research0.png")} style={style} name={"Computer Science"} text={research['hcie']}/>

      {/*** Physics ***/}
      <TextImage image={props.images("./research/research1.png")} style={style} name={"Physics"} text={research['physics']}/>
    </div>
  )
}
