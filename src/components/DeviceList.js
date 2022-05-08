import React from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import DeviceItem from "./DeviceItem";

const DeviceList = ({devices}) => {
    return(
        <div>
            <Row className="d-flex">
                {devices.map(device => {
                    return <DeviceItem key={device._id} device={device} />
                })}
            </Row>
        </div>
    )
}

let mapStateToProps = (state) => ({
       devices: state.deviceReducer.devices
})

export default connect(mapStateToProps, {})(DeviceList)