import { response } from "express";
import connection from "./index";

/**  
 * Returns a promise that resolves with the results of a SQL query or an error if one occurs.
 * 
 * @param {string} qryStr
 * @param { Array | any} values
 * @returns The results of a SQL Query
 * */

const query = (qryStr, values) => {
    return new Promise((resolve, reject) => {
        connection.query(qryStr, values, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results);
            }
        });
    });
};

export default query;