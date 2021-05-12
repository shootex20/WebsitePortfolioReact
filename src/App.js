import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NavbarImport from "./componets/NavbarImport";
import Foot from "./componets/footer";
import Title from "./componets/title";
import Aboutme from "./componets/aboutme";
import Projects from "./componets/projects";
import Particles from 'react-particles-js';


function App() {
  return (
    <>
        <NavbarImport/>
        <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 20
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
<br/>
    <BrowserRouter>
    <Switch>
    <Route exact path="/">
        <Redirect to="/home" />
    </Route>
          <Route path="/home">
             <Title/>
          </Route>
          <Route path="/aboutme">
             <Aboutme/>
          </Route>
          <Route path="/projects">
             <Projects/>
          </Route>
        </Switch>
    </BrowserRouter>
    
    <Foot/>
    </>
  );
}

export default App;
