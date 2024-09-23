import dotenv from "dotenv";
dotenv.config();
import { getUsers } from "./models.js";

// Llamamos a getUsers y mostramos el resultado en consola
const users = getUsers();
console.log("Usuarios:", users);
