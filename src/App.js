import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { PageTransition } from "@steveeeie/react-page-transition";

import NavbarImport from "./componets/NavbarImport";
import Foot from "./componets/footer";
import Title from "./componets/title";
import Aboutme from "./componets/aboutme";
import Projects from "./componets/projects";
import Resume from "./componets/resume";
import Particles from 'react-particles-js';


const HeaderNavBar = () => (
    <>
        <NavbarImport />
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
            }}
        />
    </>
);

const Home = () => <Title />;
const About = () => <Aboutme />;
const ProjectsPage = props => <Projects />;
const ResumePage = props => <Resume />;

function App() {
    return (
        <BrowserRouter>
            <HeaderNavBar />
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route
                render={({ location }) => {
                    return (
                        <PageTransition
                            preset="moveToLeftFromRight"
                            transitionKey={location.pathname}
                        >
                            <Switch location={location}>
                                <Route path="/" component={Home} />
                                <Route path="/aboutme" component={About} />
                                <Route path="/projects" component={ProjectsPage} />
                                <Route path="/resume" component={ResumePage} />
                            </Switch>
                        </PageTransition>
                    );
                }}
            />
            <Foot />
        </BrowserRouter>
    );
}

export default App;
