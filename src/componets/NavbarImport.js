import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


export const NavbarImport = () => {
    return (
      <>
      <div className="navBarIn">
  <Navbar fixed="top" className="justify-content-center navbar fixed-top navbar-expand-sm navbarColor" variant="dark">
    <Navbar.Brand href="/home">Home</Navbar.Brand>
    <Navbar.Brand href="/aboutme">About me</Navbar.Brand>
    <Navbar.Brand href="/projects">Projects</Navbar.Brand>
    <Navbar.Brand href="/resume">Resume</Navbar.Brand>
  </Navbar>
  </div>
  </>
    )
}

export default NavbarImport

