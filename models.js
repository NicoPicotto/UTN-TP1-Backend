import { existsSync, readFileSync, writeFileSync } from "fs";
import { randomUUID } from "crypto";

const PATH_FILE_USER = "./data/users.json";

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
   } catch (error) {}
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
