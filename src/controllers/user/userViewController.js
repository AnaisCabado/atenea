import userController from './userController.js';

const userViewController = {
    // renderizar formulario de registro
    registerForm: (req, res) => {
        res.render('register', { title: 'Registro' });
    },

    // renderizar formulario de login
    loginForm: (req, res) => {
        res.render('login', { title: 'Login' });
    },

    // procesar registro de usuario
    register: async (req, res) => {
        try {
            await userController.create(req.body);
            res.redirect('/login');
        } catch (error) {
            console.error(error);
            res.render('register', {
                title: 'Registro',
                error: 'Error al registrar usuario'
            });
        }
    }, 

    // procesar login
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await userController.verifyCredentials(username, password);

            if (!user) {
                return res.render('login', {
                    title: 'Iniciar sesión',
                    error: 'Usuario o contraseña incorrectos'
                });
            }

            // guardar usuario en sesion
            req.session.user = {
                id: user.user_id,
                username: user.username
            };

            res.redirect('/profile');
            
        } catch (error) {
            console.error(error);
            res.render('login', {
                title: 'Iniciar sesión',
                error: 'Error al iniciar sesión'
            });
        }
    },

    // cerrar sesión
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/login');
    },

    // mostrar perfil de usuario
    profile: async (req, res) => {
        try {
            res.render('profile', {
                title: 'Perfil',
                user: req.session.user
            });
        } catch (error) {
            console.error(error);
            res.redirect('/login');
        }
    },

    // mostrar página de inicio
    home: (req, res) => {
        res.render('home', { title: 'Inicio' });
    }
}; 

export default userViewController;