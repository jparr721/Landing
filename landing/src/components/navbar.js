/**
 * Created by Kyle Flynn on 8/22/2017.
 */
import React, { Component } from 'react';

const Navbar = () => {
    return (
        <div>
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
};

export default Navbar;
