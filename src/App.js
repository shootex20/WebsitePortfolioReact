
import NavbarImport from "./componets/NavbarImport.jsx";
import Foot from "./componets/footer.jsx";
import Title from "./componets/title.jsx";
import Aboutme from "./componets/aboutme.jsx";
import Projects from "./componets/projects.jsx";
import Resume from "./componets/resume.jsx";
import { css } from "@emotion/react";
import AmongUsParticles from "./componets/particles/AmongUsParticles"
import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


const HeaderNavBar = () => {
  return (
    <>
      <NavbarImport />
      <AmongUsParticles />
    </>
  )
}

const loadingOverRide = css`
position: fixed;
left: 0px;
top: 0px;
width: 100%;
height: 100%;
z-index: 9999;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(function() { 
    this.setState({ isLoading: false }) }.bind(this), 3000)
  }

  render() {
    return (

      this.state.isLoading
        ?
        <ClimbingBoxLoader color={'#9F6ECA'} loading={this.state.isLoading} css={loadingOverRide} size={30} />
        :
        <div id="home">
          <HeaderNavBar />
          <div className="paddingBetween">
            <Title />
          </div>
          <div className="paddingBetween">
            <Aboutme />
          </div>
          <div className="paddingBetween">
            <Projects />
          </div>
          <Resume />
          <Foot />
        </div> 

    );
  }
}

export default App;
