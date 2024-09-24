import {
   getUsers,
   getUserById,
   addUser,
   updateUser,
   deleteUser,
} from "./models.js";

const comando = process.argv[2];
const args = process.argv.slice(3);

switch (comando) {
   case "getUsers":
      const users = getUsers();
      console.log("Lista de usuarios:", users);
      break;

   case "getUserById":
      const user = getUserById(args[0]);
      if (user) {
         console.log("Usuario encontrado:", user);
      }

      break;

   case "addUser":
      const [nombre, apellido, email, password] = args;
      addUser({ nombre, apellido, email, password });
      break;

   default:
      console.error(
         "Comando no reconocido. Debes usar getUsers, getUserById, addUser"
      );
}
