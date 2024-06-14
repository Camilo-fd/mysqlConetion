import { connection } from "../../helpers/connection.js";

export const getOfficeCountry = async () => {
    const [results] = await connection.query(`select officeCode, city, country, phone from offices where country = 'USA';`);
    return results;
}

export const getAllOfficeAndEmployee = async () => {
    const [results] = await connection.query(`SELECT officeCode, city, count(employeeNumber) FROM offices inner JOIN employees using (officeCode) group by officeCode;`);
    return results;
}