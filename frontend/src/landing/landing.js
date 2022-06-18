import "./landing.css";
import { Button, Typography } from "@mui/material";
import {Card} from '../gallery/utils.ts';
import Footer from "../footer/footer.js";

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
    <div id="root" className="appear-animation width-100 flex justify-between align-center height-95">
        {/** Intro **/}
        <div style={{width: "17%", height: "50vw"}} className="flex column align-center justify-around">
          <Image image={drawings[0]} angle="5deg" height="30%"/>
          <Image image={drawings[2]} angle="-3deg" height="35%"/>
        </div>
        <div style={{width: "65%", height: "41vw"}} className="flex align-center justify-center box-shadow cardboard">
          <div style={{width: "95%", height: "120%", marginLeft: "-2%", backgroundColor: "#fff"}}>
            <div className="width-100">
              <Button sx={{fontSize: "1.5vw", fontFamily: "'Annie Use Your Telescope'", marginLeft: "20px", marginTop: "5px", color: "#000", opacity: "50%"}} className="text-center darken">Resume</Button>
              <Button sx={{fontSize: "1.5vw", fontFamily: "'Annie Use Your Telescope'", marginLeft: "20px", marginTop: "5px", color: "#000", opacity: "50%"}} className="text-center darken">Projects</Button>
              <Button sx={{fontSize: "1.5vw", fontFamily: "'Annie Use Your Telescope'", marginLeft: "20px", marginTop: "5px", color: "#000", opacity: "50%"}} className="text-center darken">Research</Button>
              <Button sx={{fontSize: "1.5vw", fontFamily: "'Annie Use Your Telescope'", marginLeft: "20px", marginTop: "5px", color: "#000", opacity: "50%"}} className="text-center darken">Work</Button>
              <Button sx={{fontSize: "1.5vw", fontFamily: "'Annie Use Your Telescope'", marginLeft: "20px", marginTop: "5px", color: "#000", opacity: "50%"}} className="text-center darken">Contact</Button>
            </div>
            <div style={{width: "105%", height: `${500/6}%`, marginTop: "3%", marginLeft: "-3%", position: "sticky"}} className="cardboard flex">
              <div className="flex column align-center justify-around" style={{height: "100%"}}>
                <div className="flex column align-center justify-around" style={{height: "30%"}}>
                  <Pin margin="5px"/>
                  <Pin margin="5px"/>
                  <Pin margin="5px"/>
                </div>
                <div className="flex column align-center justify-around" style={{height: "30%"}}>
                  <Pin margin="5px"/>
                  <Pin margin="5px"/>
                </div>
              </div>
              <div className="flex column">
                <div className="flex">
                  <div className="flex margin-30px">
                    <Typography sx={{fontSize: "8vw", fontFamily: "'Barrio'", color: "#FF0303", transform: "rotate(-10deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>H</Typography>
                    <Typography sx={{fontSize: "8vw", fontFamily: "'Barrio'", color: "#00E0FF", transform: "rotate(-5deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>E</Typography>
                    <Typography sx={{fontSize: "8vw", fontFamily: "'Barrio'", color: "#fff", transform: "rotate(-3deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>L</Typography>
                    <Typography sx={{fontSize: "8vw", fontFamily: "'Barrio'", color: "#000", transform: "rotate(2deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>L</Typography>
                    <Typography sx={{fontSize: "8vw", fontFamily: "'Barrio'", color: "#fff", transform: "rotate(5deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>O</Typography>
                  </div>
                  <div className="flex justify-end" style={{height: "fit-content"}}>
                    <img alt="" src={images("./github_sticker.png").default} style={{height: "12%", width: "16%", marginTop: "16%", transform: "rotate(-35deg)"}}/>
                    <img alt="" src={images("./mit_sticker.png").default} style={{width: "32%"}}/>
                  </div> 
                </div>
                <div>
                  <div className="flex" style={{marginLeft: "90px"}}>
                    <Typography sx={{fontSize: "5vw", fontFamily: "'Barrio'", color: "#fff", transform: "rotate(5deg)", marginRight: "15px"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>I </Typography>
                    <Typography sx={{fontSize: "5vw", fontFamily: "'Barrio'", color: "#05FF00", transform: "rotate(-5deg)", marginRight: "15px"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom> AM </Typography>
                    <Typography sx={{fontSize: "5vw", fontFamily: "'Barrio'", color: "#fff", transform: "rotate(-3deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom> A</Typography>
                    <Typography sx={{fontSize: "5vw", fontFamily: "'Barrio'", color: "#039700", transform: "rotate(2deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>HME</Typography>
                    <Typography sx={{fontSize: "5vw", fontFamily: "'Barrio'", color: "#000", transform: "rotate(5deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>D</Typography>
                  </div>
                  <div className="flex" style={{marginLeft: "90px"}}>
                    <Typography sx={{fontSize: "4vw", fontFamily: "'Barrio'", color: "#000", transform: "rotate(5deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>COMP</Typography>
                    <Typography sx={{fontSize: "4vw", fontFamily: "'Barrio'", color: "#fff", transform: "rotate(-5deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>UT</Typography>
                    <Typography sx={{fontSize: "4vw", fontFamily: "'Barrio'", color: "#000", transform: "rotate(-3deg)", marginRight: "15px"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>ER</Typography>
                    <Typography sx={{fontSize: "4vw", fontFamily: "'Barrio'", color: "#fff", transform: "rotate(2deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>S</Typography>
                    <Typography sx={{fontSize: "4vw", fontFamily: "'Barrio'", color: "#D0D0D0", transform: "rotate(5deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>CIENT</Typography>
                    <Typography sx={{fontSize: "4vw", fontFamily: "'Barrio'", color: "#fff", transform: "rotate(-5deg)", marginRight: "15px"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>IST</Typography>
                    <Typography sx={{fontSize: "4vw", fontFamily: "'Barrio'", color: "#fff", transform: "rotate(-5deg)", marginRight: "15px"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>|</Typography>
                    <Typography sx={{fontSize: "4vw", fontFamily: "'Barrio'", color: "#00E0FF", transform: "rotate(5deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>ART</Typography>
                    <Typography sx={{fontSize: "4vw", fontFamily: "'Barrio'", color: "#000", transform: "rotate(-5deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>IS</Typography>
                    <Typography sx={{fontSize: "4vw", fontFamily: "'Barrio'", color: "#fff", transform: "rotate(5deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>T</Typography>
                  </div>
                  <div className="flex" style={{marginLeft: "90px"}}>
                    <Typography sx={{fontSize: "3vw", fontFamily: "'Barrio'", color: "#BB0909", transform: "rotate(5deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>WE</Typography>
                    <Typography sx={{fontSize: "3vw", fontFamily: "'Barrio'", color: "#FF0303", transform: "rotate(-5deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>LCOM</Typography>
                    <Typography sx={{fontSize: "3vw", fontFamily: "'Barrio'", color: "#fff", transform: "rotate(-5deg)", marginRight: "15px"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>E</Typography>
                    <Typography sx={{fontSize: "3vw", fontFamily: "'Barrio'", color: "#fff", transform: "rotate(-3deg)", marginRight: "15px"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>TO</Typography>
                    <Typography sx={{fontSize: "3vw", fontFamily: "'Barrio'", color: "#fff", transform: "rotate(2deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>M</Typography>
                    <Typography sx={{fontSize: "3vw", fontFamily: "'Barrio'", color: "#05FF00", transform: "rotate(5deg)", marginRight: "15px"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>Y</Typography>
                    <Typography sx={{fontSize: "3vw", fontFamily: "'Barrio'", color: "#05FF00", transform: "rotate(-5deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>SLI</Typography>
                    <Typography sx={{fontSize: "3vw", fontFamily: "'Barrio'", color: "#000", transform: "rotate(-5deg)", marginRight: "15px"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>CE</Typography>
                    <Typography sx={{fontSize: "3vw", fontFamily: "'Barrio'", color: "#000", transform: "rotate(5deg)", marginRight: "15px"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>OF</Typography>
                    <Typography sx={{fontSize: "3vw", fontFamily: "'Barrio'", color: "#fff", transform: "rotate(-5deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>T</Typography>
                    <Typography sx={{fontSize: "3vw", fontFamily: "'Barrio'", color: "#039700", transform: "rotate(5deg)", marginRight: "15px"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>HE</Typography>
                    <Typography sx={{fontSize: "3vw", fontFamily: "'Barrio'", color: "#039700", transform: "rotate(-5deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>WE</Typography>
                    <Typography sx={{fontSize: "3vw", fontFamily: "'Barrio'", color: "#fff", transform: "rotate(-5deg)"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>B</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{width: "17%", height: "60vw"}} className="flex column align-center justify-around">
          <Image image={drawings[1]} angle="-3deg" height="20%"/>
          <Image image={drawings[3]} angle="7deg" height="20%"/>
          <Image image={drawings[4]} angle="2deg" height="20%"/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

function Pin(props) {
  return (
    <div className="box-shadow circle yellow-solid box-shadow" style={{width: "1vw", height: "1vw", margin: props.margin}}></div>
  )
}

function Image(props) {
  const angle = props.angle;
  const image = props.image;
  return (
    <div style={{width: "80%", height: props.height, background: `url(${image.default})`, transform: `rotate(${angle})`, backgroundSize: "100% 100%"}} className="flex justify-center box-shadow">
      <Pin margin="-5px 0px 0px"/>
    </div>
  )
}
export default Landing;
