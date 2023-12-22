# Inspired Instruction Assignment

## Applicant

- Name: Mitchell Sung
- Email: mitchell.sung@gmail.com
- Portfolio: [https://mitchell-sung.netlify.app/](https://mitchell-sung.netlify.app/)

## **Summary**

This project involves creating an educational dashboard with the following technology stack:

- **Frontend**: Implemented using `React` and `TypeScript`.
- **Backend**: Developed using `Node.js`.
- **Database**: Built with SQL Server.
- Additionally, the frontend is deployed at [https://inspiredinsturction.netlify.app/]
- **Github**: https://github.com/Mitchell-Sung/Inspired

## **Setup Procedure**

1. **Download the Project**: Obtain the project files either from the attached file or clone the repository via GitHub.

   ```jsx
   git clone https://github.com/Mitchell-Sung/Inspired.git
   ```

2. **Folder Structure**: The downloaded folder contains two subfolders: **`client`** and **`server`**.
   - **`client`**: Manages the frontend.
   - **`server`**: Manages the backend.
3. **Backend Setup**:
   - Navigate to **`./assignment-inspired_instruction/server`**.
   - Run **`npm install`** to install dependencies.
   - Start the server with **`npm run dev`**.
4. **Frontend Setup**:
   - In a new terminal, go to **`./assignment-inspired_instruction/client`**.
   - Run **`npm install`** to install dependencies.
   - Start the application with **`npm run dev`**.

If your node version is not compatible with the project, consider using [nvm](https://github.com/creationix/nvm) to manage multiple versions.

### **Optional Steps for Database Setup**

- **Database Code**: The project files do not inherently include database code. To incorporate and run the database:
  - Download SQL Server from [Microsoft SQL Server Downloads](https://www.microsoft.com/en-ca/sql-server/sql-server-downloads).
  - Create a new database instance.
  - Copy and paste the SQL queries from the root directory (filename: **`inspiredInsturction.sql`**) into the new instance and execute them.
  - In **`./assignment-inspired_instruction/server/config/db.js`**, adjust the following configuration with your database details:
    ```jsx
    const config = {
      user: '',
      password: '',
      server: '',
      database: '',
      options: {
        encrypt: false,
        enableArithAbort: true,
      },
    };
    ```
  - Modify **`./assignment-inspired_instruction/server/controllers/home/getHome.js`** by uncommenting and adapting necessary code.
  - Replace the **`getHome`** function with the appropriate logic for your setup.
  - Restart the server with **`npm run dev`**.

## **Notes**

- **User Authentication**: No user authentication system is implemented.
- **Testing**: Test codes have not been developed.

If anything does not work as expected, please do not hesitate to contact me via email.
