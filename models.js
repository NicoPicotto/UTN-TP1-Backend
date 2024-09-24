import { existsSync, readFileSync, writeFileSync } from "fs";
import { randomUUID, createHash } from "crypto";
import { handleError } from "./utils/handleError.js";
import dotenv from "dotenv";
dotenv.config();
//const hash = createHash("sha256").update(password).digest("hex");

const PATH_FILE_USER = process.env.PATH_FILE_USER;
const PATH_FILE_ERROR = process.env.PATH_FILE_ERROR;

//Si no existe el archivo debe crearlo como un array vacío
const getUsers = () => {
   try {
      if (!existsSync(PATH_FILE_USER)) {
         writeFileSync(PATH_FILE_USER, JSON.stringify([]));
         return [];
      }

      const users = readFileSync(PATH_FILE_USER, "utf-8");
      return JSON.parse(users);
   } catch (error) {
      console.log(error);
      return [];
   }
};

const getUserById = (id) => {
   try {
      const users = getUsers();
      const user = users.find((user) => user.id === id);

      if (!user) {
         throw new Error(`No se encontró el usuario con el ID:${id}`);
      }

      return user;
   } catch (error) {
      handleError(error, PATH_FILE_ERROR);
   }
};

//Validar que recibe un objeto
// que tiene los datos minimos requeridos
// que nombres apellido e email sean un string y no se repitan
//hashear la contraseña
const addUser = (userData) => {
   try {
   } catch (error) {}
};

//se puede modificar todo menos el ID, si se modifica la pass debe ser hasheada de nuevo
//Si se cambia email validar que este no exista
const updateUser = (userData) => {
   try {
   } catch (error) {}
};

const deleteUser = (id) => {
   try {
   } catch (error) {}
};

export { getUsers, getUserById, addUser, updateUser, deleteUser };
