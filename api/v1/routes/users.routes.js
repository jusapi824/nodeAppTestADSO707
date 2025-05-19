const db = require('../../../models');
const { Router } = require('express'); // Destructuración
// Se crea el router
const router = Router();
const userController = require('../../../controllers/userController');

router.get('/testUserAPI', (req, res) => {
    res.send({
        "status": 200,
        "message": "Hello from Users"
    }); 
});

// Rutas del usuario con los verbos HTTP
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

module.exports = router;
