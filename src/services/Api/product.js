import axios from '../axios'


export const getListProduct = async () => {
    try {
        const getList = await axios.get(`product/list`)
        return getList.data
    } catch (error) {
        console.log(error)
    }
}