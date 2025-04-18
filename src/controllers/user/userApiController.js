import jwt from 'jsonwebtoken';
import userController from './userController.js';

const userApiController = {
    // registrar usuario(API)
    register: async (req, res) => {
        try {
            const user = await userController.create(req.body);
            // excluir password del resultado
            const { password, ...userWithoutPassword } = user.toJSON();
            res.status(201).json({ message: 'Error en el servidor' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error en el servidor' });
        }
    },

    // login de usuario (API)
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await userController.verifyCredentials(username, password);

            if (!user) {
                return res.status(401).json({ message: 'Usuario o contraseña incorrectas' });
            }

            // generar token JWT
            const token = jwt.sign(
                { id: user.user_id, username: user.username },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            // excluir password del resultado
            const { password: _, ...userWithoutPassword } = user.toJSON();

            res.json({
                user: userWithoutPassword,
                token
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error en el servidor' });
        }
    },

    // obtener perfil del usuario (API)
    profile: async (req, res) => {
        try {
            const users = await userController.getAll();
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error en el servidor' });
        }
    }
};

export default userApiController;