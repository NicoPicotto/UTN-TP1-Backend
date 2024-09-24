import { randomUUID, createHash } from "node:crypto";
//Obtener los argumentos pasados por terminal que vienen del index
//Desarrollar las funciones que crean los objetos para añadir y actualizar usuario
//Controlas los errores

const createUserObject = ({ nombre, apellido, email, password }) => {
   return {
      id: randomUUID(),
      nombre,
      apellido,
      email,
      password: createHash("sha256").update(password).digest("hex"),
      isLoggedIn: false,
   };
};

const updateUserObject = (args) => {
   try {
   } catch (error) {}
};

export { createUserObject, updateUserObject };
