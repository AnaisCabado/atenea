import User from '../../models/user.js';
import bcrypt from 'bcrypt';

const userController = {
    // obtener todos los users
    getAll: async () => {
        try {
            const users = await User.findAll({
                attributes: { exclude: ['password'] } // excluir contraseñas
            });
            return users;
        } catch (error) {
            console.error(error);
            throw new Error('Error al obtener usuarios');
        }
    },

    // crear nuevo usuario
    create: async () => {
        try {
            const { username, password } = userData;
            const hash = await bcrypt.hash(password, 10);
            const user = await User.create({ username, password: hash });
            return user;
        } catch (error) {
            console.error(error);
            throw new Error('Error al crear usuario');
        }
    },

    // verificar credenciales
    verifyCredentials: async (username, password) => {
        try {
            const user = await User.findOne({ where: { username } });
            if (!user) return null;

            return user;
        } catch (error) {
            console.error(error);
            throw new Error('Error al verificar credenciales');
        }
    }
};

export default userController;