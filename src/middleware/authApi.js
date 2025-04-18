import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    try {
        // verificar si hay un token en el header de autorización
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'No autorizado' });
        }

        // extraer el token 
        const token = authHeader.split(' ')[1];

        // verificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // guardar la información del usuario en el request
        req.user = decoded;

        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Token inválido' });
    }
};