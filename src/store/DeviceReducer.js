import { getCount } from "../http/deviceAPI"

const SET_TYPES = 'SET_TYPES'
const SET_SELECTED_TYPE = 'SET_SELECTED_TYPE'
const SET_BRANDS = 'SET_BRANDS'
const SET_DEVICES = 'SET_DEVICES'
const SET_SELECTED_BRAND = 'SET_SELECTED_BRAND'
const SET_PAGE = 'SET_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

const initialState = {
    types: [],
    selectedType: {},
    brands: [],
    selectedBrand: {},
    devices: [],
    page: 1,
    totalCount: 0,
    limit: 3
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_TYPES:
            state.types = action.types
            return {...state}
        case SET_BRANDS:
            state.brands = action.brands
            return {...state}
        case SET_DEVICES:
            state.devices = action.devices
            return {...state}
        case SET_SELECTED_TYPE:
            state.selectedType = action.selectedType
            return {...state}
        case SET_SELECTED_BRAND:
            state.selectedBrand = action.selectedBrand
            return {...state}
        case SET_PAGE:
            state.page = action.page
            return {...state}
        case SET_TOTAL_COUNT:
            state.totalCount = action.totalCount
            return {...state}
        default:
            return {...state}
    }
}

let setTypes = (types) => ({type: SET_TYPES, types})
let setBrands = (brands) => ({type: SET_BRANDS, brands})
let setDevices = (devices) => ({type: SET_DEVICES, devices})
let setPage = (page) => ({type: SET_PAGE, page})
let setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const setSelectedType = (selectedType) => ({type: SET_SELECTED_TYPE, selectedType})
export const setSelectedBrand = (selectedBrand) => ({type: SET_SELECTED_BRAND, selectedBrand})

export const setTypesInfo = types => dispatch => {
    dispatch(setPage(1))
    dispatch(setTypes(types))
}
export const setBrandsInfo = brands => dispatch => {
    dispatch(setPage(1))
    dispatch(setBrands(brands))
}

export const setDevicesInfo = devices => dispatch => {
    dispatch(setDevices(devices))
}

export const setTotalCountInfo = () => async dispatch => {
    let data = await getCount()
    dispatch(setTotalCount(data.count))
}

export const setPageInfo = page => dispatch => {
    dispatch(setPage(page))
}