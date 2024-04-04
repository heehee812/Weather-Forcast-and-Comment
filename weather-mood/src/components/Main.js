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
                <div className='container'>
                    <Navbar color="faded" light expand="md">
                        <NavbarBrand className='text-info' href="/">WeatherMood</NavbarBrand>
                        <NavbarToggler onClick={this.handleNavbarToggle} />
                        <Collapse isOpen={this.state.navbarToggle} navbar>
                            <Nav navbar>
                                <NavItem>Today</NavItem>
                                <NavItem>Forecast</NavItem>
                            </Nav>
                            <div className='search ml-auto'>
                                <Input className='ml-auto' type='text' innerRef={this.searchEl} placeholder='Search' onKeyPress={this.handleSearchKeyPress} innerRef={e => this.searchEl = e}></Input>{
                                    this.state.searchText &&
                                    <i className='navbar-text fa fa-times' onClick={this.handleClearSearch}></i>
                                }
                            </div>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }

    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }

    handleSearchKeyPress(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13){
            this.setState({
                searchText: e.target.value
            });
        }
    }

    handleClearSearch() {
        this.setState({
            searchText: ''
        });
        this.searchEl.value = '';
    }
}