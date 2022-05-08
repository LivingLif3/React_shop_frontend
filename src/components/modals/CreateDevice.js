import React, { useState, useEffect } from "react";
import { Form, Modal, Button, Dropdown, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { setSelectedBrand, setSelectedType , setTypesInfo, setBrandsInfo } from "../../store/DeviceReducer";
import { createDevice, fetchBrands, fetchTypes } from "../../http/deviceAPI";

const CreateDevice = ({show, onHide, types, brands, setTypesInfo, setBrandsInfo, setSelectedBrand, setSelectedType, selectedBrand, selectedType}) => {
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    useEffect(() => {
        fetchTypes().then(data => {
            setTypesInfo(data)
        })
        fetchBrands().then(data => {
            setBrandsInfo(data)
        })
    }, [])

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key] : value} : i))
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brand', selectedBrand._id)
        formData.append('type', selectedType._id)
        formData.append('info', info)
        console.log(formData)
        createDevice(formData).then(data => onHide())
    }

    return(
        <Modal
        show={show}
        onHide={onHide}
         size="lg"
         centered
        >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                  <Dropdown.Menu>
                     {types.map(type => {
                         return <Dropdown.Item onClick={() => setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                     })}
                  </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
                  <Dropdown.Menu>
                     {brands.map(brand => {
                         return <Dropdown.Item onClick={() => setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                     })}
                  </Dropdown.Menu>
              </Dropdown>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)} 
                className="mt-3"
                placeholder="Введите название устройства"
              />
              <Form.Control
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))} 
                className="mt-3"
                placeholder="Введите стоимость устройства"
                type="number"
              />
              <Form.Control 
                className="mt-3"
                type="file"
                onChange={selectFile}
              />
              <hr/>
               <input 
                style={{width: '400px'}} 
                placeholder="Введите информацию"
                value={info}
                onChange={e => setInfo(e.target.value)}
                />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addDevice}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    )
}

let mapStateToProps = (state) => ({
    types: state.deviceReducer.types,
    brands: state.deviceReducer.brands,
    selectedType: state.deviceReducer.selectedType,
    selectedBrand: state.deviceReducer.selectedBrand
})

export default connect(mapStateToProps, {setSelectedBrand, setBrandsInfo, setSelectedType, setTypesInfo})(CreateDevice)