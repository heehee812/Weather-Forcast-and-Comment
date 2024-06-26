import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
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

import Today from './Today.jsx'
import Forecast from './Forecast.jsx'

import './Main.css';

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
        this.handleSearchKeyPress = this.handleSearchKeyPress.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);
        this.handleUnitChange = this.handleUnitChange.bind(this);
    }
    render() {
        return (
            <Router>
                <div className='main bg-faded'>
                    <div className='container'>
                        <Navbar color="faded" light expand="md">
                            <NavbarBrand className='text-info' href="/">WeatherMood</NavbarBrand>
                            <NavbarToggler onClick={this.handleNavbarToggle} />
                            <Collapse isOpen={this.state.navbarToggle} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink tag={Link} to='/'>Today</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to='/forecast'>Forecast</NavLink>
                                    </NavItem>
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
                    <Routes>
                        <Route exact path="/" element={
                            <Today unit={this.state.unit} searchText={this.state.searchText} onUnitChange={this.handleUnitChange} />
                        } />
                        <Route exact path="/forecast" element={
                            <Forecast unit={this.state.unit} onUnitChange={this.handleUnitChange} />
                        } />
                    </Routes>

                    <div className='footer'>
                        Chencharrr
                    </div>
                </div>
            </Router>
        );
    }

    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }

    handleSearchKeyPress(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
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

    handleUnitChange(unit) {
        this.setState({
            unit: unit
        });
    }
}