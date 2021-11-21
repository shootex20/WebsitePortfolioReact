import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";


export const NavbarImport = () => {
    return (
      <>
      <div className="navBarIn">
  <Navbar fixed="top" className="justify-content-center navbar fixed-top navbar-expand-sm navbarColor" variant="dark">
  <Navbar.Brand><Link smooth={true} to="home">Home</Link> </Navbar.Brand>
  <Navbar.Brand><Link smooth={true} to="aboutme">About me</Link></Navbar.Brand>
  <Navbar.Brand><Link smooth={true} to="projects">Project</Link></Navbar.Brand>
  <Navbar.Brand><Link smooth={true} to="resume">Resume</Link></Navbar.Brand>
  </Navbar>
  </div>
  </>
    )
}

export default NavbarImport

