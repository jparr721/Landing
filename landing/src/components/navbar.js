/**
 * Created by Kyle Flynn on 8/22/2017.
 */
import React, { Component } from 'react';
import MenuIcon from 'material-ui-icons/Menu'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_state: 'collapsed',
            bar_state: '',
            active_item: 'home'
        };
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            nav_state: prevState.nav_state === 'collapsed' ? 'visible' : 'collapsed',
            bar_state: prevState.bar_state === 'normal' ? 'rotate' : 'normal',
        }));
    }

    isActive(link) {
        return this.state.active_item === link ? 'active' : '';
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
                            <MenuIcon className={'text-white ' + this.state.bar_state}/>
                        </div>
                    </div>
                </div>
                <div id="navbar-mobile-items" className={'row primary-bg ' + this.state.nav_state}>
                    <ul className="text-center">
                        <li><a href="#" className={this.isActive('home')}>Home</a></li>
                        <li><a href="#" className={this.isActive('about')}>About</a></li>
                        <li><a href="#" className={this.isActive('our-work')}>Our Work</a></li>
                        <li><a href="#" className={this.isActive('contact')}>Contact Us</a></li>
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
