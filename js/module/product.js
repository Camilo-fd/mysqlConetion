import { connection } from "../../helpers/connection.js";

export const getAllProductsStock = async () => {
    const [results] = await connection.query(`SELECT productName, quantityInStock FROM products;`);
    return results;
}

export const getAmountProductsStock = async () => {
    const [results] = await connection.query(`SELECT COUNT(*) FROM products;`);
    return results;
}

export const getNameAmountProduct = async () => {
    const [results] = await connection.query(`SELECT productName,  COUNT(*) FROM products GROUP BY productName;`);
    return results;
}