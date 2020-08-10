
import React, { Fragment } from 'react';

class Navbar extends React. Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment >
                <div className="header">
                    <div className="Support-div">
                    <h1 className="Support-text1">Support The Gardian</h1>
                    <p className="Support-text2"> Available for EveryOne, funded by readers</p>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Navbar;