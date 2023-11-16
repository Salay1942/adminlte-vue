import httpClient from "@/services/httpClient";
import { server } from "@/services/constants";




export const getProducts = () => {
  return httpClient.get(`http://localhost:9090/api/provider`);
};

export const getProductById = id => {
  return httpClient.get(`http://localhost:9090/api/provider` + `/${id}`);
};

export const addProduct = data => {
  return httpClient.post(server.PRODUCT_URL, data);
};

export const deleteProduct = id => {
  return httpClient.delete(server.PRODUCT_URL + `/id/${id}`);
};

export const updateProduct = data => {
  return httpClient.put(server.PRODUCT_URL, data);
};

