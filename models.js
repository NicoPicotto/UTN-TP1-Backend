import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomUUID, createHash } from "node:crypto";
import { handleError } from "./utils/handleError.js";
import { createUserObject, updateUserObject } from "./utils/createUser.js";
import dotenv from "dotenv";
dotenv.config();
//const hash = createHash("sha256").update(password).digest("hex");

const PATH_FILE_USER = process.env.PATH_FILE_USER;
const PATH_FILE_ERROR = process.env.PATH_FILE_ERROR;

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
      return null;
   }
};

const addUser = (userData) => {
   try {
      const { nombre, apellido, email, password } = userData;

      /*Inicio de bloque de manejo de errores*/
      if (!nombre || !apellido || !email || !password) {
         throw new Error(
            "Faltan campos obligatorios: nombre, apellido, email o password"
         );
      }

      const users = getUsers();
      if (users.some((user) => user.email === email)) {
         throw new Error("Ya existe un usuario registrado con ese email");
      }
      /*Fin de bloque de manejo de errores*/

      const newUser = createUserObject({ nombre, apellido, email, password });
      users.push(newUser);
      writeFileSync(PATH_FILE_USER, JSON.stringify(users));
      console.log("Usuario agregado correctamente:", newUser);
      return newUser;
   } catch (error) {
      handleError(error, PATH_FILE_ERROR);
      return null;
   }
};

const updateUser = (id, userData) => {
   try {
      const users = getUsers();

      const userIndex = users.findIndex((user) => user.id === id);

      if (userIndex === -1) {
         throw new Error(`No se encontró el usuario con el ID: ${id}`);
      }

      //Este if capaz está un poco rebuscado pero no sé cómo lo puedo mejorar
      if (
         userData.email &&
         users.some((u) => u.email === userData.email && u.id !== id)
      ) {
         throw new Error("Ya existe un usuario registrado con ese email");
      }

      const updatedUser = updateUserObject(users[userIndex], userData);

      users[userIndex] = updatedUser;

      writeFileSync(PATH_FILE_USER, JSON.stringify(users));
      console.log("Usuario actualizado correctamente:", updatedUser);
      return updatedUser;
   } catch (error) {
      handleError(error, process.env.PATH_FILE_ERROR);
      return null;
   }
};

const deleteUser = (id) => {
   try {
      const users = getUsers();

      const userIndex = users.findIndex((user) => user.id === id);

      if (userIndex === -1) {
         throw new Error(`No se encontró el usuario con el ID: ${id}`);
      }

      const deletedUser = users.splice(userIndex, 1)[0];
      writeFileSync(PATH_FILE_USER, JSON.stringify(users));
      console.log("Usuario eliminado correctamente:", deletedUser);
      return deletedUser;
      
   } catch (error) {
      handleError(error, process.env.PATH_FILE_ERROR);
      return null;
   }
};

export { getUsers, getUserById, addUser, updateUser, deleteUser };
