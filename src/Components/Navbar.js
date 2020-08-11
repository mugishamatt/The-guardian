
import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Navbar extends React.Component {
        constructor(props) {
            super(props);
            this.state = {}
        }
        render() {
            return (
                <React.Fragment >
                    <div className="header">
                        <div className="Support-div">
                            <h1 className="Support-text1">Support The Gardian</h1>
                            <p className="Support-text2"> Available for EveryOne, funded by readers</p>
                        </div>
                       {/* route */}
                        <Router>
                        <div className="subsnavbar">
                          <Link  clasName="contribute" to = "#">Conttribute</Link>
                          <Link ClassName= "subscribe" to = "#">Subcribe</Link>
                        </div>
                        </Router>
                    </div>

                </React.Fragment>
            );
        }
    }

export default Navbar;