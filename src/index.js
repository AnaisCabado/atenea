import express from 'express';
import dotenv from "dotenv";
import session from "express-session";
import router from "./routes/index.js";

// cargar variables de entorno
dotenv.config();

// crear servidor Express
const APP_PORT = process.env.APP_PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET;
const app = express();;
app.use(express.static('public'));
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))
// configurar middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('src/public'));

// configurar motor de plantillas
app.set("view engine", "pug");
app.set("views", "./src/views");

// configurar rutas
app.use("/", router);

// iniciar servidor
app.listen(APP_PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${APP_PORT}`);
});