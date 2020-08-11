
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
                        
                       
                       {/* route */}
                        <Router>
                            {/* upper NavBar */}
                            <div className="upper-navbar">
                              <ul className="upper-search">
                                  <li><Link className="Search-Navbar" to ="">Search jobs</Link> </li>
                                  <li><Link className="Search-Navbar" to ="">Sign in</Link> </li>
                                  <li><Link className="Search-Navbar" to ="">Search</Link> </li>
                                  <li><Link className="Search-Navbar" to ="">Us Edition</Link> </li>
                              </ul>
                            </div>
                             {/* banner */}
                             <div className="banner">
                            <h1 className="text1">the</h1>
                            <h1 className="text2" >guardian</h1>
                        </div>
                            {/* support guardian */}
                            <div className="Support-div">
                            <h1 className="Support-text1">Support The Gardian</h1>
                            <p className="Support-text2"> Available for EveryOne, funded by readers</p>
                        </div>
                          
                        {/* support links */}
                        <div className="subsnavbar">
                          <Link  className="contribute" to = "#">Contribute</Link>
                          <Link className= "contribute" to = "#">Subcribe</Link>
                        </div>
                        
                       
                    {/* big navigation bar */}
                    <div className="BigNavBar">
                        <ul className="navbar">
                     <li> <Link className="News" to ="">News</Link> </li> 
                      <li> <Link className="News" to ="">Opinion</Link> </li>
                       <li><Link className="News" to ="">Sports</Link></li>
                       <li> <Link className="News" to ="">Culture</Link></li>
                       <li><Link className="News" to ="">Lifestyle</Link></li>
                       <li><Link className="News" to ="More">More</Link></li>
                       </ul>
                    </div>
                        </Router>
                    </div>

                </React.Fragment>
            );
        }
    }

export default Navbar;