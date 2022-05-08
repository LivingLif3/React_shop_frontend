import React from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { setSelectedType } from "../store/DeviceReducer";
import store from '../store/store';

const TypeBar = ({types, selected}) => {
    let dispatch = store.dispatch
    return(
        <ListGroup>
            {types.map(item => {
                return <ListGroup.Item key={item._id} style={{cursor: 'pointer'}}
                onClick={() => dispatch(setSelectedType(item))}
                active = {item._id === selected._id}>
                    {item.name}
                </ListGroup.Item>
            })}
        </ListGroup>
    )
}

let mapStateToProps = (state) => ({
    types: state.deviceReducer.types,
    selected: state.deviceReducer.selectedType
})

export default connect(mapStateToProps, {})(TypeBar)