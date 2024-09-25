import { randomUUID, createHash } from "node:crypto";

const createUserObject = (userData) => {
   const { nombre, apellido, email, password } = userData;
   
   return {
      id: randomUUID(),
      nombre,
      apellido,
      email,
      password: createHash("sha256").update(password).digest("hex"),
      isLoggedIn: false,
   };
};

const updateUserObject = (user, updatedData) => {
   const { nombre, apellido, email, password } = updatedData;

   const updatedUser = {
      ...user,
      nombre: nombre || user.nombre,
      apellido: apellido || user.apellido,
      email: email || user.email,
      password: password
         ? createHash("sha256").update(password).digest("hex")
         : user.password,
   };

   return updatedUser;
};

export { createUserObject, updateUserObject };
