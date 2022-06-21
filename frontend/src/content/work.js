import './content.css';
import { Typography } from '@mui/material';

export function Work(props) {
  const style = {fontSize: "1.5vw", fontFamily: "'Annie Use Your Telescope'", color: "#000", marginLeft: "30px"};

  return (
    <div style={{color: "black", height: "91%"}} id="work" className="none column align-center scroll no-scrollbar">
      {/*** Infosys ***/}
      <div className="flex margin-30px align-center">
        <img alt="" src={props.images("./work/infosys.png").default} style={{height: "5vw"}} className="pointer"/>
        <Typography style={style}>
          <b>Quantum Machine Learning Intern</b>
          <br></br>
          Designed and implemented a GAN for security surveillance feed super resolution. This model was then converted from a classical GAN model into a quantum GAN
        </Typography>
      </div>

      {/*** Road 2 Success ***/}
      <div className="flex margin-30px align-center">
        <Typography style={style}>
          <b>Tutor</b>
          <br></br>
          Tutored over 30 students over the summer in SAT Math, Geometry, Calculus, and Chemistry for 15 hours a week for six weeks for 3 years. 
          While I was there some students saw exam scores increase by an average of 100 points over a month
        </Typography>
        <img alt="" src={props.images("./work/road2sucess.png").default} style={{height: "6vw"}} className="pointer"/>
      </div>

      {/*** Sonia & Celina Sotomayor Judicial ***/}
      <div className="flex margin-30px align-center">
      <img alt="" src={props.images("./work/sonia.png").default} style={{height: "4vw"}} className="pointer"/>
        <Typography style={style}>
          <b>Judicial Intern</b>
          <br></br>
          Interned for Magistrate Judge Bloom of the Second Eastern District of New York where I worked on case memorandum with the clerks, created complaint summaries, 
          and performed filing duties. THe internship also allowed me the honor of meeting Supreme Court Justice Sonia Sotomayor.
        </Typography>
      </div>
    </div>
  )
}
