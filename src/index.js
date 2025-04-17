import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import router from "./routes/index.js";

// cargar variables de entorno
dotenv.config();

// crear servidor Express
const app = express();
const PORT = process.env.PORT || 3000;

// configurar middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('src/public'));

// configurar motor de plantillas
app.set("view engine", "pug");
app.set("views", "./src/views");

// configurar sesion
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // true para HTTPS
        maxAge: 1000 * 60 * 24 * 7 // 1 semana
    }
}));

// configurar rutas
app.use("/", router);

// iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});