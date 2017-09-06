/**
 * Created by Kyle Flynn on 8/22/2017.
 */
import React, { Component } from 'react';
import MenuIcon from 'material-ui-icons/Menu'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_state: 'collapsed'
        };
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            nav_state: prevState.nav_state == 'collapsed' ? 'visible' : 'collapsed'
        }));
    }

    render() {
        return (
            <div className="container-fluid">
                <div id="navbar-mobile" className="row primary-bg">
                    <div className="col-9">
                        {/* Dummy Placeholder */}
                    </div>
                    <div id="navbar-mobile-toggle" className="col-3">
                        <div className="icon-container" onClick={this.toggleMenu}>
                            <MenuIcon className="text-white"/>
                        </div>
                    </div>
                </div>
                <div id="navbar-mobile-items" className={'row primary-bg ' + this.state.nav_state}>
                    <ul className="text-center">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                    </ul>
                </div>
                <div id="navbar" className="row">
                    <div className="col-md-6">
                        {/* Dummy Placeholder */}
                    </div>
                    <div className="text-center col-md-1 nav-item">
                        <a href="#">Home</a>
                    </div>
                    <div className="text-center col-md-1 nav-item">
                        <a href="#">About</a>
                    </div>
                    <div className="text-center col-md-1 nav-item">
                        <a href="#">Services</a>
                    </div>
                    <div className="text-center col-md-1 nav-item">
                        <a href="#">Projects</a>
                    </div>
                    <div className="text-center col-md-1 nav-item">
                        <a href="#">Hire Us</a>
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-10">
                        <hr/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;
