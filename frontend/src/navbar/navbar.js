import './navbar.css';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

function NavBar() {
  return (
    <>
      <nav>
        <div className="navCont align-center">
            <div>
              <Button variant="text" id="contact" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: "#000"}}>Resume</Button>
              <Button variant="text" id="contact" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: "#000"}}>Contact</Button>
              <Button variant="text" id="contact" className="nav-p" sx = {{fontSize : "14px", fontWeight: "900", color: "#000"}}>Notes</Button>
            </div>
            <GitHubIcon sx={{color: "#000"}} className="nav-p" fontSize="large"/>
        </div>
      </nav>
    </>
  )
}

export default NavBar;