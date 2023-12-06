import client from "./ApiClient";

export const getAllProducts = () => {
  return client("product");
};

export const addProduct = (body) => {
  return client("product", {
    method: "POST",
    body,
  });
};

export const editProduct = (id, body) => {
  return client("product/" + id, {
    method: "PUT",
    body,
  });
};

export const deleteProduct = (id) => {
  return client("product/" + id, {
    method: "DELETE",
  });
};
