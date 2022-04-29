import Express, { json } from 'express'
import dotenv from 'dotenv'
import { apiRouter } from './routers'
import { connectDatabase } from './db/database'
import { EnvConfig } from './types/types'

// .env config
dotenv.config();

// .env variables destructuring with type EnvConfig
const { PORT, MONGO_USER, MONGO_PASS, MONGO_URL } = process.env as EnvConfig;

// Express
const app = Express();
app.use( json() );
apiRouter( app );

// make listen port with the route server
app.listen( PORT, () => {
  console.log(`http://localhost:${PORT}/api`)
})

// Connect mongoose
connectDatabase( MONGO_USER, MONGO_PASS, MONGO_URL )
