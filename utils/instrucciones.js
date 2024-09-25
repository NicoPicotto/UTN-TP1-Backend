console.log(`
   =====================================
           Instrucciones de Uso
   =====================================
   
   Para ejecutar los comandos, utilizá el siguiente formato:
   
   node index.js <comando> [argumentos]
   
   Donde <comando> puede ser uno de los siguientes:
   
   1. **getUsers**
      - **Descripción:** Muestra la lista de todos los usuarios.
      - **Uso:**
        \`\`\`
        node index.js getUsers
        \`\`\`
   
   2. **getUserById <id>**
      - **Descripción:** Muestra el usuario con el ID especificado.
      - **Uso:**
        \`\`\`
        node index.js getUserById <id>
        \`\`\`
   
   3. **addUser <nombre> <apellido> <email> <password>**
      - **Descripción:** Agrega un nuevo usuario.
      - **Uso:**
        \`\`\`
        node index.js addUser <nombre> <apellido> <email> <password>
        \`\`\`
   
   4. **updateUser <id> <nombre> <apellido> <email> <password>**
      - **Descripción:** Actualiza la información de un usuario existente.
      - **Uso:**
        \`\`\`
        node index.js updateUser <id> <nombre> <apellido> <email> <password>
        \`\`\`
   
   5. **deleteUser <id>**
      - **Descripción:** Elimina el usuario con el ID especificado.
      - **Uso:**
        \`\`\`
        node index.js deleteUser <id>
        \`\`\`
   
   **Ejemplos:**
   
   - Para listar todos los usuarios:
     \`\`\`
     node index.js getUsers
     \`\`\`
   
   - Para obtener un usuario por ID:
     \`\`\`
     node index.js getUserById 123e4567-e89b-12d3-a456-426614174000
     \`\`\`
   
   - Para agregar un nuevo usuario:
     \`\`\`
     node index.js addUser Juan Perez juan@example.com miPassword123
     \`\`\`
   
   - Para actualizar un usuario:
     \`\`\`
     node index.js updateUser 123e4567-e89b-12d3-a456-426614174000 Juan Carlos Perez juancarlos@example.com nuevoPassword456
     \`\`\`
   
   - Para eliminar un usuario:
     \`\`\`
     node index.js deleteUser 123e4567-e89b-12d3-a456-426614174000
     \`\`\`
   
   =====================================
   `);
