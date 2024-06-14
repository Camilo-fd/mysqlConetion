import { connection } from "../../helpers/connection.js";

export const getPaymentClient = async () => {
    const [results] = await connection.query(`select customerNumber, checkNumber, paymentDate from payments where customerNumber = 103;`);
    return results;
}