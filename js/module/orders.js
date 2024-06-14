import { connection } from "../../helpers/connection.js";

export const getAllOrderShipped = async () => {
    const [results] = await connection.query(`select orderNumber, orderDate, requiredDate, shippedDate, status, customerNumber from orders where status = 'Shipped';`);
    return results;
}

export const getAllOrderClientProduct = async () => {
    const [results] = await connection.query(`SELECT orderNumber, orderDate, productName, quantityOrdered, priceEach FROM orders INNER JOIN orderdetails USING (orderNumber) INNER JOIN products USING (productCode) ORDER BY `);
    return results;
}