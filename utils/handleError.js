import { existsSync, readFileSync, writeFileSync } from "fs";
import { randomUUID } from "crypto";

const handleError = (error, path) => {
   if (!existsSync(path)) {
      writeFileSync(path, JSON.stringify([]));
   }

   const fileError = JSON.parse(readFileSync(path, "utf-8"));
   const newError = {
      id: randomUUID(),
      type: error.message,
      date: new Date().toLocaleString(),
   };

   fileError.push(newError);
   writeFileSync(path, JSON.stringify(fileError));
   console.error(`Error: ${error.message}`);
   return error.message;
};

export { handleError };
