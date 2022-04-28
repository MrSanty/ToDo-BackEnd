import Express, { json } from 'express';
import dotenv from 'dotenv';
import { apiRouter } from './routers';

// .env config
dotenv.config();

// Express
const app = Express();
app.use( json() );
apiRouter( app );

// Port config
const { PORT = 3000 } = process.env;

// make listen port with the route server
app.listen( PORT, () => {
  console.log( `http://localhost:${ PORT }/` );
});