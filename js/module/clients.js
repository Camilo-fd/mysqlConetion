import { connection } from "../../helpers/connection.js";

export const getClient = async () => {
    const [results] = await connection.query(`select customerName, contactLastName, customerNumber from customers where customerNumber = 103;`);
    return results;
}

export const getClientCity = async () => {
    const [results] = await connection.query(`SELECT customerName, contactLastName, contactFirstName, city  from customers where city = 'Madrid';`);
    return results;
}

export const getClientSaleRepresentative = async () => {
    const [results] = await connection.query(`SELECT lastName, firstName, customerName, jobTitle FROM customers inner JOIN employees ON employeeNumber = salesRepEmployeeNumber ORDER BY customerName;`);
    return results;
}