import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";
import { setIsAuthInfo, setUserInfo } from "../store/UserReducer";

const NavBar = ({isAuth, dispatch, setUserInfo, setIsAuthInfo}) => {
    const navigate = useNavigate();

    const logOut = () => {
        setUserInfo({})
        setIsAuthInfo(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: '#fff', textDecoration: 'none'}} to = {SHOP_ROUTE} >DeviceStore</NavLink>
                {isAuth ? 
                <Nav className="ml-auto">
                    <Button variant={"outline-light"}
                     onClick={() => navigate(ADMIN_ROUTE)} >Админ панель</Button>
                    <Button style={{marginLeft: '40px'}} variant={"outline-light"} 
                     onClick={() => logOut()} >Выйти</Button>
                </Nav> 
                :
                <Nav className="ml-auto">
                    <Button variant={"outline-light"} onClick = {() => navigate(LOGIN_ROUTE)} >Авторизация</Button>
                 </Nav>
                }
                
            </Container>
        </Navbar>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.userReducer.isAuth
})

export default connect(mapStateToProps, {setIsAuthInfo, setUserInfo})(NavBar)