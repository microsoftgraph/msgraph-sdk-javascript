// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <NavBarSnippet>
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
  Container,
  Dropdown,
  Navbar,
  Nav,
  NavDropdown,
  NavItem
} from 'react-bootstrap';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

import { AppUser, useAppContext } from './AppContext';

interface UserAvatarProps {
  user: AppUser
};

function UserAvatar(props: UserAvatarProps) {
  // If a user avatar is available, return an img tag with the pic
  return <img
    src={props.user.avatar || '/images/no-profile-photo.png'} alt="user"
    className="rounded-circle align-self-center mr-2"
    style={{ width: '32px' }}></img>;
}

export default function NavBar() {
  const app = useAppContext();
  const user = app.user || { displayName: '', email: '' };

  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="/">React Graph Tutorial</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto" navbar>
            <NavItem>
              <RouterNavLink to="/" className="nav-link">Home</RouterNavLink>
            </NavItem>
            <AuthenticatedTemplate>
              <NavItem>
                <RouterNavLink to="/group" className="nav-link">Group</RouterNavLink>
              </NavItem>
            </AuthenticatedTemplate>
          </Nav>
          <Nav className="ms-auto align-items-center" navbar>
            <NavItem>
              <Nav.Link href="https://developer.microsoft.com/graph/docs/concepts/overview" target="_blank">
                Docs
              </Nav.Link>
            </NavItem>
            <AuthenticatedTemplate>
              <NavDropdown title={<UserAvatar user={user} />} id="user-dropdown" align="end">
                <h5 className="dropdown-item-text mb-0">{user.displayName}</h5>
                <p className="dropdown-item-text text-muted mb-0">{user.email}</p>
                <Dropdown.Divider />
                <Dropdown.Item onClick={app.signOut!}>Sign Out</Dropdown.Item>
              </NavDropdown>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
              <NavItem>
                <Nav.Link
                  onClick={app.signIn!}>Sign In</Nav.Link>
              </NavItem>
            </UnauthenticatedTemplate>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
// </NavBarSnippet>
