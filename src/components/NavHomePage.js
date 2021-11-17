
import React, { useState } from 'react';
import classnames from 'classnames';
import { AiFillHome } from 'react-icons/ai';
import { GiTripleNeedle } from 'react-icons/gi';
import {MdLocationOn} from 'react-icons/md';
import {BiSearchAlt} from 'react-icons/bi'; 
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import "../assets/css/components/navnavigation.css";

const NavHomePage = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div  id = "header">
      <div className="header-container">
		<div className="image-nav"><img src={require('../assets/img/photos/logoNav.png')} alt={"logo"}/>
			<span>CovidVaccination</span>
		</div>
		<div className="nav">
		<Navbar expand="lg">
        <NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
			<Nav className="mr-auto" navbar>
				<NavItem>
				<NavLink className="nav-item" href="/">
						<AiFillHome size={30}/>
						<span style={{marginLeft : "10px"}}>
							Home
						</span>
				</NavLink>
				</NavItem>
				<NavItem>
				<NavLink className="nav-item" href="https://github.com/reactstrap/reactstrap">
						<GiTripleNeedle size={30}/>
						<span style={{marginLeft : "10px"}}>
							Vaccine
						</span>
				</NavLink>
				</NavItem>
				<NavItem>
				<NavLink className="nav-item" href="https://github.com/reactstrap/reactstrap">
						<MdLocationOn size={30}/>
						<span style={{marginLeft : "10px"}}>
							Site
						</span>
				</NavLink>
				</NavItem>
				<NavItem className="nav-item-search" >
					<div className="nav search-btn">
						<input type="text" placeholder="Search vaccine name ,type..."/>
						<BiSearchAlt color='white' size={30} style={{ marginLeft : "5px" , marginTop : "2px" }}/>
					</div>
				</NavItem>
				<NavItem  className="nav-item" >
				<NavLink  href={'/auth/sign-up'}>
						Register
				</NavLink>
				</NavItem>
				<NavItem  className="nav-item" >
				<NavLink href={'/auth/sign-in'}>
						Login
				</NavLink>
				</NavItem>
			</Nav>
			</Collapse>
		</Navbar>
		</div>
	  </div>
    </div>
  );
}

export default NavHomePage;