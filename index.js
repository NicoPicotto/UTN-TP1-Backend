import {
   getUsers,
   getUserById,
   addUser,
   updateUser,
   deleteUser,
} from "./models.js";

let nombre, apellido, email, password;

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
      [nombre, apellido, email, password] = args;
      addUser({ nombre, apellido, email, password });
      break;

   case "updateUser":
      const userIdUpdate = args[0];
      [nombre, apellido, email, password] = args.slice(1);
      updateUser(userIdUpdate, { nombre, apellido, email, password });
      break;

   case "deleteUser":
      const userIdDelete = args[0];
      deleteUser(userIdDelete);
      break;

   default:
      console.error(
         "Comando no reconocido. Para ver la lista de comandos disponibles, ejecutá: npm run instrucciones"
      );
}
