//melakukan query kedalam database

const dbpool = require('../config/database');

const getAllUsers = () =>{
    const SQLQuery = 'SELECT*FROM users';
 
    return dbpool.execute(SQLQuery);
}

const createNewUsers = (body) => {
    const SQLQuery = `INSERT INTO users (name,email,message)
                        VALUES ('${body.name}', '${body.email}', '${body.message}')`;
    return dbpool.execute(SQLQuery);
}

const updateUsers = (body, iduser) => {
    const SQLQuery = `UPDATE users 
                        SET name = '${body.name}', email = '${body.email}', message = '${body.message}'
                        WHERE id=${iduser}`;
    return dbpool.execute(SQLQuery);
    
}

const deleteUsers = (iduser) => {
    const SQLQuery = `DELETE FROM users WHERE id=${iduser}`;
    return dbpool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers
} 
