import sql from 'mssql';

// const config = {
//   user: 'mitchell',
//   password: '',
//   server: 'mssqllocaldb',
//   database: 'InspiredInstruction',
//   options: {
//     encrypt: false,
//     enableArithAbort: true,
//   },
// };

async function dbConnect() {
  try {
    await sql.connect(config);
    console.log('##::>> Database connection successful.');
  } catch (err) {
    console.error('##::>> Database connection failed: ', err);
    throw err;
  }
}

export default dbConnect;
