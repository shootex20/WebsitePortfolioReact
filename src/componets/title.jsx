import React from 'react'
import Fade from 'react-reveal/Fade';
import Typed from 'react-typed';


export const title = () => {


    return (
        <div className="containerMax">
            <div className="headerContainer">
                <div className="responsiveContainer">
                    <Fade bottom duration={1000} delay={300} distance="0px">

                        <h2 className="headerText"><Typed
                            strings={["Hi, my name is Chelsey <br/> I'm a Full-Stack Web Developer."]}
                            typeSpeed={60}
                            backspaceSpeed={80}
                        /></h2>

                    </Fade>

                    <br />


                </div>
            </div>
            </div>
    )
}

export default title
