const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS user(
    user_id INT(5) NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    user_phone VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);`.replace(/[\r\n]/g, "");
const SELECT_TABLE = (tableName) => `SELECT * FROM ${tableName}`;

module.exports = {
	CREATE_TABLE,
    SELECT_TABLE
};
