import React from 'react';

import './Main.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    Button
} from 'reactstrap';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unit: 'metric',
            navbarToggle: false,
            searchText: ''
        };
        this.searchEl = null;

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
    }
    render() {
        return (
            <div className='main bg-faded'>
                <div className='container'></div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand className='text-info' href="/">WeatherMood</NavbarBrand>
                    <NavbarToggler onClick={this.handleNavbarToggle} />
                    <Collapse isOpen={this.state.navbarToggle} navbar>
                        <Nav navbar>
                            <NavItem>Today</NavItem>
                            <NavItem>Forecast</NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }
}