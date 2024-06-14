import { connection } from "../../helpers/connection.js";

export const getEmployeesOffice = async () => {
    const [results] = await connection.query(`SELECT lastname, firstname FROM employees WHERE officecode = '1';`);
    return results;
}

export const  getEmployeesBoss = async () => {
    const [results] = await connection.query(`select lastName, employeeNumber, reportsTo, jobTitle from employees WHERE reportsTo is not null;`);
    return results;
}

export const  getAllEmployeesOfficeWork = async () => {
    const [results] = await connection.query(`select employeeNumber, lastName, firstName, officeCode, city from employees inner join offices using (officeCode) order by employeeNumber`);
    return results;
}