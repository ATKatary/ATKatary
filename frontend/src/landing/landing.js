import "./landing.css";
import NavBar from "../navbar/navbar.js";
import Footer from "../footer/footer.js";
import {Pin, Image, CoverText} from "../personal_util/components.js"
import { Projects } from "../content/projects";
import { Research } from "../content/research";
import { Work } from "../content/work";
import { Contact } from "../content/contact";
import { Resume } from "../content/resume";

/*** GLobal Constants ***/

function Landing() {
  const images = require.context('../media/images', true);
  const createCharMap = (size, color, angle, margin = "0") => {return {'size': size, 'color': color, 'angle': angle, 'margin': margin}};
  const hello = [
    ['h', createCharMap("8vw", "#ff0303", "-10")], 
    ['e', createCharMap("8vw", "#00e0ff", "-5")], 
    ['l', createCharMap("8vw", "#fff", "-3")],
    ['l', createCharMap("8vw", "#000", "2")], 
    ['o', createCharMap("8vw", "#fff", "5")]
  ]
  const iAmAhmed = [
    ['i', createCharMap("5vw", "#fff", "5", "15px")],
    ['am', createCharMap("5vw", "#05ff00", "-5", "15px")],
    ['a', createCharMap("5vw", "#fff", "-3")],
    ['hme', createCharMap("5vw", "#039700", "2")],
    ['d', createCharMap("5vw", "#000", "5")]
  ]
  const computerScientistArtist = [
    ['comp', createCharMap("4vw", "#000", "5")],
    ['ut', createCharMap("4vw", "#fff", "-5")],
    ['er', createCharMap("4vw", "#000", "-3", "15px")],
    ['s', createCharMap("4vw", "#fff", "2")],
    ['cient', createCharMap("4vw", "#d0d0d0", "5")],
    ['ist', createCharMap("4vw", "#fff", "-5", "15px")],
    ['|', createCharMap("4vw", "#fff", "-5", "15px")],
    ['art', createCharMap("4vw", "#00e0ff", "5")],
    ['is', createCharMap("4vw", "#000", "-5")],
    ['t', createCharMap("4vw", "#fff", "5")]
  ]
  const welcomeToMySliceOfTheWeb = [
    ['we', createCharMap("3vw", "#bb0909", "5")],
    ['lcom', createCharMap("3vw", "#ff0303", "-5")],
    ['e', createCharMap("3vw", "#fff", "-3", "15px")],
    ['to', createCharMap("3vw", "#fff", "2", "15px")],
    ['m', createCharMap("3vw", "#fff", "5")],
    ['y', createCharMap("3vw", "#05ff00", "-5", "15px")],
    ['sli', createCharMap("3vw", "#05ff00", "-5")],
    ['ce', createCharMap("3vw", "#000", "5", "15px")],
    ['of', createCharMap("3vw", "#000", "-5", "15px")],
    ['t', createCharMap("3vw", "#fff", "5")],
    ['he', createCharMap("3vw", "#039700", "5", "15px")],
    ['we', createCharMap("3vw", "#039700", "5")],
    ['b', createCharMap("3vw", "#fff", "5")]
  ]
  return (
    <>
    <div id="root" className="appear-animation width-100 flex justify-between align-center height-95">
        {/** Left Art Gallery **/}
        <div style={{width: "17%", height: "50vw"}} className="flex column align-center justify-around">
          <Image i={0} angle="5deg" height="35%"/>
          <Image i={2} angle="-3deg" height="30%"/>
        </div>

        {/** Book **/}
        <div style={{width: "65%", height: "41vw"}} className="flex align-center justify-center box-shadow cardboard">
          <div id="paper" style={{width: "95%", height: "120%", marginLeft: "-2%", backgroundColor: "#fff"}}>
            <NavBar coverId={"cover"}/>
            {/** Sections **/}
            <Resume />
            <Projects images={images}/>
            <Research images={images}/>
            <Work images={images}/>
            <Contact images={images}/>
            {/** Cover **/}
            <div 
              id="cover"
              style={{width: "105%", height: `${500/6}%`, marginTop: "3%", marginLeft: "-3%", position: "sticky"}} 
              className="cardboard flex">

              {/** Content **/}
              <div className="flex column">
                <div className="flex">
                  <CoverText charMap={hello} id={"hello"} style={{margin: "30px"}}/>
                  <div className="flex justify-end" style={{height: "fit-content"}}>
                    <img 
                      alt="github" 
                      src={images("./github_sticker.png").default} 
                      style={{height: "12%", width: "16%", marginTop: "16%", transform: "rotate(-35deg)"}}
                      className="pointer"
                      onClick={() => window.location = "https://github.com/ATKatary"}/>
                    <img 
                      alt="mit" 
                      src={images("./mit_sticker.png").default} 
                      style={{width: "32%"}}/>
                  </div> 
                </div>
                <div>
                  <CoverText charMap={iAmAhmed} id={"iAmAhmed"} style={{marginLeft: "90px"}}/>
                  <CoverText charMap={computerScientistArtist} id={"computerScientistArtist"} style={{marginLeft: "90px"}}/>
                  <CoverText charMap={welcomeToMySliceOfTheWeb} id={"welcomeToMySliceOfTheWeb"} style={{marginLeft: "90px"}}/>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/** Right Art Gallery **/}
        <div style={{width: "17%", height: "60vw"}} className="flex column align-center justify-around">
          <Image i={1} angle="-3deg" height="17%"/>
          <Image i={3} angle="7deg" height="20%"/>
          <Image i={4} angle="2deg" height="15%"/>
        </div>

      </div>
      <Footer/>
    </>
  );
}

export default Landing;
