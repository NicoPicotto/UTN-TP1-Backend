
import { getUsers, getUserById } from "./models.js";

// Llamamos a getUsers y mostramos el resultado en consola
const idToSearch = process.argv[2];
const user = getUserById(idToSearch);
