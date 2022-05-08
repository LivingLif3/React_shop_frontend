import React, {useState} from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { registration, login } from "../http/userAPI";
import { setUserInfo, setIsAuthInfo } from "../store/UserReducer";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";

const Auth = ({setUserInfo, setIsAuthInfo}) => {
    let location = useLocation()
    const navigator = useNavigate()
    const isLogin = location.pathname == LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const click = async () => {
        try{
            let user
            if(isLogin){
                user = await login(email, password)
            }else{
                user = await registration(email, password)
            }
            setUserInfo(user)
            setIsAuthInfo(true)
            navigator(SHOP_ROUTE)
        } catch(e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
            >
            <Card style={{width: 600}} className="p-5 d-flex justify-content-center align-items-center">
                <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className={"mt-3"}
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                        style={{width: '500px'}}
                    />
                    <Form.Control
                        className={"mt-3"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="Введите ваш пароль..." 
                    />
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                        {isLogin ? 
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                        </div>}
                        
                        <Button 
                        variant={"outline-dark"} onClick={click}>
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
}

let mapStateToProps = (state) => {
    
}

export default connect(mapStateToProps, {setUserInfo, setIsAuthInfo})(Auth);