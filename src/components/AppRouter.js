import React from "react";
import { connect } from "react-redux";
import {Routes, Route, Navigate} from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";

const AppRouter = ({isAuth}) => {  
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) => {
                return <Route exact key = {path} path = {path} element = {Component} />
            })}
            {publicRoutes.map(({path, Component}) => {
                return <Route exact key = {path} path = {path} element = {Component} />
            })}
            <Route path = {'*'} element = { <Navigate to = {SHOP_ROUTE} /> } />
        </Routes>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.userReducer.isAuth
})

export default connect(mapStateToProps, {})(AppRouter);