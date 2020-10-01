import React , {useState} from 'react';
import {  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import {withRouter} from 'react-router-dom';

function Home(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [home , setHome] = useState(false);
  const [task , setTask] = useState(false);
  const [user , setUser] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const homeClick = () => {
     setHome(!home);
     setTask(task);
     setUser(user);
  }

  const taskClick = () => {
    setTask(!task);
    setHome(home);
    setUser(user);
  }

  const userClick = () => {
    setUser(user);
    setHome(home);
    setTask(task);
  }

  return (
    <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem  className={home?"navItemClass":''} onChange={homeClick}>
              <NavLink className={home?"navLinkClass":''} href="/home">Home</NavLink>
            </NavItem>
            <NavItem className={task?"navItemClass":''} onChange={taskClick}>
              <NavLink className={task?"navLinkClass" : ''} href="/tasks">Tasks</NavLink>
            </NavItem>
            <NavItem className={user?"navItemClass":''} onChange={userClick}>
              <NavLink className={user?"navLinkClass":''} href="/user">User</NavLink>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}export default withRouter(Home);
