import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode"

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (type, brand, page, limit = 5) => {
    const {data} = await $host.get('api/device', {params: {
        type, brand, limit, page
    }})
    return data
}

export const getCount = async () => {
    const {data} = await $host.get('api/device/count')
    console.log(data, 'here')
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    console.log(data)
    return data
}