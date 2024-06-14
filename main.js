import {
    getAllProductsStock,
    getAmountProductsStock,
    getNameAmountProduct,
    getProductBuyElderlyFive
} from "./js/module/product.js";

import {
    getEmployeesOffice,
    getEmployeesBoss,
    getAllEmployeesOfficeWork
} from "./js/module/employees.js";

import {
    getClient,
    getClientCity,
    getClientSaleRepresentative
} from "./js/module/clients.js"

import {
    getPaymentClient
} from "./js/module/payment.js"

import {
    getAllOrderShipped,
    getAllOrderClientProduct
} from "./js/module/orders.js"

import {
    getOfficeCountry,
    getAllOfficeAndEmployee
} from "./js/module/office.js"

console.log(await getEmployeesOffice());