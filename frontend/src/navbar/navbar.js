import './navbar.css';
import {Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

function NavBar(props) {
  const color = props.color;
  return (
    <>
      <nav>
        <div className="navCont align-center">
          <div className="hide-700px">
            <Button variant="text" id="contact" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: {color}}}>Resume</Button>
            <Button variant="text" id="contact" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: {color}}}>Contact</Button>
            <Button variant="text" id="contact" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: {color}}} onClick={() => window.location="#projects"}>Projects</Button>
            <Button variant="text" id="contact" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: {color}}} onClick={() => window.location="#research"}>Research</Button>
            <Button variant="text" id="contact" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: {color}}} onClick={() => window.location="#art"}>Art</Button>
          </div>
          <MenuIcon sx={{color: props.color}} fontSize="large" className="nav-p show-700px"/>
          <GitHubIcon sx={{color: {color}}} className="nav-p pointer" fontSize="large" onClick={() => {window.location = "https://github.com/ATKatary"}}/>
        </div>
      </nav>
    </>
  )
}

export default NavBar;