import './content.css';
import { Typography } from '@mui/material';
import {ImageText, TextImage} from '../personal_util/components';

export function Work(props) {
  const style = {fontSize: "max(1.5vw, 15px)", fontFamily: "'Annie Use Your Telescope'", color: "#000", marginLeft: "30px"};
  const work = {
    'infosys': `Designed and implemented a GAN for security surveillance feed super resolution. This model was then converted from a classical GAN model into a quantum GAN`,
    'road2sucess': `Tutored over 30 students over the summer in SAT Math, Geometry, Calculus, and Chemistry for 15 hours a week for six weeks for 3 years. While I was there some students saw exam scores increase by an average of 100 points over a month`,
    'sonia': `Interned for Magistrate Judge Bloom of the Second Eastern District of New York where I worked on case memorandum with the clerks, created complaint summaries, and performed filing duties. THe internship also allowed me the honor of meeting Supreme Court Justice Sonia Sotomayor.`
  }
  return (
    <div style={{color: "black", height: "91%"}} id="work" className="none column align-center scroll no-scrollbar">
      {/*** Infosys ***/}
      <ImageText image={props.images("./work/work0.png")} style={style} name={"Quantum Machine Learning Intern"} text={work['infosys']}/>

      {/*** Road 2 Success ***/}
      <TextImage image={props.images("./work/work1.png")} style={style} name={"Math Tutor"} text={work['road2sucess']}/>

      {/*** Sonia & Celina Sotomayor Judicial ***/}
      <ImageText image={props.images("./work/work2.png")} style={style} name={"Judicial Intern"} text={work['sonia']}/>
    </div>
  )
}
