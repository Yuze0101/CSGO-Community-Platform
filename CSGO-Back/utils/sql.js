const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS user(
    user_id INT(5) NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    user_phone VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);`.replace(/[\r\n]/g, "")
const SELECT_TABLE = (tableName) => `SELECT * FROM ${tableName}`

const INIT_USER_TABLE = `CREATE TABLE IF NOT EXISTS steamAccount(
    steamId INT(5) NOT NULL AUTO_INCREMENT,
    personName VARCHAR(255) NOT NULL,
    profileUrl VARCHAR(255) NOT NULL,
    avatar VARCHAR(255) NOT NULL,
    PRIMARY KEY (steamId)
);`.replace(/[\r\n]/g, "")

const INSERT_USER = (user) =>
	`INSERT INTO steamAccount(steamId, personName,profileUrl,avatar) VALUES('${user.steamid}', '${user.personaname}','${user.profileurl}','${user.avatarmedium}');`
module.exports = {
	CREATE_TABLE,
	SELECT_TABLE,
	INIT_USER_TABLE,
}
