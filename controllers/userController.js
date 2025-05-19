// Enlazamos el servicio(capa) de usuario
const user_service = require('../services/userService');

const getAllUsers = async (req, res) => {
    const allUsers = await user_service.getAllUsers();
    if (allUsers) {
        res.status(200).send({ status: "Ok", data : allUsers });
    } else {
        res.status(400).send({ status: "Failed", data : null });
    }
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await user_service.getUserById(id);
    if (user)
        res.status(200).send({ status: "ok", data: user });
    else
        res.status(400).send({ status: "failed", data: null });
};

module.exports = {
    getAllUsers,
    getUserById
};