const db = require('../models');

const getAllUsers = async () => {
    try {
        const users = await db.User.findAll();
        return users;
    } catch (error) {
        throw new Error("Error al traer usuarios> "+error.message);
    }    
}

const getUserById = async (id) => {
    try {
        const user = await db.User.findByPk(id);
        return user;
    } catch (error) {
        throw new Error("Error al traer el usuario> "+error.message);
    }
}

module.exports = {
    getAllUsers,
    getUserById
};