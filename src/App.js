import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userAPI';
import { setIsAuthInfo, setUserInfo } from './store/UserReducer';

const App = ({dispatch, setUserInfo, setIsAuthInfo}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      check().then(data => {
        setUserInfo(true)
        setIsAuthInfo(true)
     }).finally(() => setLoading(false))
  }, [])

  if(loading){
    return <Spinner animation={"grow"} />
  }

  return (
    <BrowserRouter>
      <NavBar dispatch = {dispatch}/>
      <AppRouter />
    </BrowserRouter>
  )
}

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {setUserInfo, setIsAuthInfo})(App);
