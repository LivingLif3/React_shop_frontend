import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import Pages from "../components/Pages";
import TypeBar from "../components/TypeBar";
import { fetchBrands, fetchDevices, fetchTypes, getCount } from "../http/deviceAPI";
import { setTypesInfo, setBrandsInfo, setDevicesInfo, setTotalCountInfo } from "../store/DeviceReducer";

const Shop = ({setTypesInfo, setBrandsInfo, 
    setDevicesInfo, setTotalCountInfo, page, selectedType, selectedBrand}) => {
    useEffect(() => {
        fetchTypes().then(data => {
            setTypesInfo(data)
        })
        fetchBrands().then(data => {
            setBrandsInfo(data)
        })
        
        fetchDevices(null, null, 1, 2).then( data => {
            setDevicesInfo(data)
            setTotalCountInfo()
        })
    }, [])

    useEffect(() => {
        fetchDevices(selectedType._id, selectedBrand._id, page, 2).then( data => {
            setDevicesInfo(data)
            setTotalCountInfo()
        })
    }, [page, selectedType, selectedBrand])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3} >
                    <TypeBar />
                </Col>
                <Col md={9} className="d-flex flex-column">
                    <BrandBar />
                    <div>
                        <DeviceList />
                    </div>
                    <Pages />
                </Col>
            </Row>
        </Container>
    )
}

let mapStateToProps = (state) => ({
    page: state.deviceReducer.page,
    selectedType: state.deviceReducer.selectedType,
    selectedBrand: state.deviceReducer.selectedBrand
})

export default connect(mapStateToProps, {setTypesInfo, getCount, setTotalCountInfo, setBrandsInfo, setDevicesInfo})(Shop)