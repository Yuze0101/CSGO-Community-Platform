const mysql = require("mysql");
const MYSQL_CONFIG = require("../config/mysql_config.js");

// mysql
const pool = mysql.createPool(MYSQL_CONFIG);

// query sql 语句接口
const query = (sql, callback) => {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) {
				return reject(err);
			}
			connection.query(sql, (err, rows) => {
				if (err) {
					return reject(err);
				}
				connection.release();
				resolve(rows);
			});
		});
	});
};
module.exports = { query };
