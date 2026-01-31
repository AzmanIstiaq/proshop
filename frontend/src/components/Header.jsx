import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Badge, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";
import SearchBox from "./SearchBox";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const closeMenu = () => setExpanded(false);

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="py-2 lg:py-3">
      <div className="max-w-7xl mx-auto px-3">
        <div className="relative header-pill bg-white border-2 border-black rounded-full shadow-lg px-3 py-2 lg:px-4 lg:py-3">
            <Navbar
              expand="lg"
              collapseOnSelect
              expanded={expanded}
              onToggle={(val) => setExpanded(val || false)}
              className="bg-transparent p-0"
            >
            <div className="relative w-full flex items-center justify-between lg:grid lg:grid-cols-3 lg:items-center lg:gap-4">
              <div className="flex items-center lg:justify-start">
                <LinkContainer to="/">
                  <Navbar.Brand className="brand-primary flex items-center gap-2 font-bold text-lg mb-0">
                    ProShop
                  </Navbar.Brand>
                </LinkContainer>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <div className="w-full max-w-md mx-auto">
                  <SearchBox />
                </div>
              </div>

              <div className="header-nav hidden lg:flex items-center gap-3 justify-end">
                <LinkContainer to="/cart">
                  <Nav.Link className="nav-link font-bold text-sm d-flex align-items-center gap-1">
                    <FaShoppingCart className="align-middle" /> Cart
                    {cartItems.length > 0 && (
                      <Badge pill bg="success" className="ms-1">
                        {cartItems.reduce((a, c) => a + c.qty, 0)}
                      </Badge>
                    )}
                  </Nav.Link>
                </LinkContainer>

                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="username-desktop" className="font-black text-sm">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to="/login">
                  <Nav.Link className="nav-link font-bold text-sm d-flex align-items-center gap-1">
                    <FaUser className="align-middle" /> Sign In
                  </Nav.Link>
                  </LinkContainer>
                )}

                {userInfo && userInfo.isAdmin && (
                  <NavDropdown title="Admin" id="adminmenu-desktop" className="font-black text-sm">
                    <LinkContainer to="/admin/productlist">
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/userlist">
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/orderlist">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
              </div>

              <div className="flex lg:hidden items-center justify-end absolute right-2 top-1/2 -translate-y-1/2">
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="border-0 shadow-none p-0"
                  onClick={() => setExpanded((prev) => !prev)}
                >
                  <div className="flex flex-col gap-1">
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                  </div>
                </Navbar.Toggle>
              </div>
            </div>

            <Navbar.Collapse
              id="basic-navbar-nav"
              className="d-lg-none absolute left-0 right-0 top-full mt-3 w-full bg-white border border-gray-200 rounded-2xl shadow-xl px-4 py-4 z-30"
            >
              <Nav className="flex flex-col gap-3">
                <SearchBox />
                <LinkContainer to="/cart">
                  <Nav.Link
                    className="text-dark font-bold text-sm d-flex align-items-center gap-1"
                    onClick={closeMenu}
                  >
                    <FaShoppingCart className="align-middle" /> Cart
                    {cartItems.length > 0 && (
                      <Badge pill bg="success" className="ms-1">
                        {cartItems.reduce((a, c) => a + c.qty, 0)}
                      </Badge>
                    )}
                  </Nav.Link>
                </LinkContainer>
                {userInfo ? (
                  <>
                    <NavDropdown title={userInfo.name} id="username" className="font-black text-sm text-dark">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item onClick={closeMenu}>
                          Profile
                        </NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item
                        onClick={() => {
                          closeMenu();
                          logoutHandler();
                        }}
                      >
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                    {userInfo.isAdmin && (
                      <NavDropdown title="Admin" id="adminmenu" className="font-black text-sm">
                        <LinkContainer to="/admin/productlist">
                          <NavDropdown.Item onClick={closeMenu}>
                            Products
                          </NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/userlist">
                          <NavDropdown.Item onClick={closeMenu}>
                            Users
                          </NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/orderlist">
                          <NavDropdown.Item onClick={closeMenu}>
                            Orders
                          </NavDropdown.Item>
                        </LinkContainer>
                      </NavDropdown>
                    )}
                  </>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link
                      className="text-dark font-bold text-sm d-flex align-items-center gap-1"
                      onClick={closeMenu}
                    >
                      <FaUser className="align-middle" /> Sign In
                    </Nav.Link>
                  </LinkContainer>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default Header;
