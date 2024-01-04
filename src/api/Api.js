import axios from 'axios';

export async function  productsData (){
    const data = await axios.get("https://fakestoreapiserver.reactbd.com/products");
    return data;
}

export async function jewelaryData(){
    const data = await axios.get("https://fakestoreapi.com/products/category/jewelery");
    return data;
}

export async function ElectroicData(){
    const data = await axios.get("https://fakestoreapiserver.reactbd.com/tech");
    return data;
}
// https://fakestoreapi.com/products/category/jewelery
// https://fake-store-api.mock.beeceptor.com/api/products