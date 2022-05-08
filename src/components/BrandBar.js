import React from "react";
import { Card, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { setSelectedBrand } from "../store/DeviceReducer";
import store from '../store/store';

const BrandBar = ({brands, selected}) => {
    let dispatch = store.dispatch
    return (
       <div style={{display: 'flex', maxHeight: '60px'}}>
           {brands.map(brand => {
               return <Card key = {brand._id} border = {brand._id === selected._id ? 'danger' : 'light'}
               className="p-3" onClick={() => dispatch(setSelectedBrand(brand))} style={{cursor: 'pointer'}}>
                   {brand.name}
               </Card>
           })}
       </div>
    )
}

let mapStateToProps = (state) => ({
    brands: state.deviceReducer.brands,
    selected: state.deviceReducer.selectedBrand
})

export default connect(mapStateToProps, {})(BrandBar)