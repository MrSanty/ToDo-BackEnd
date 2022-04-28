// import connection monogoose
import mongoose from 'mongoose';


export const connectDatabase = ( user: string , pass: string, url: string ) => {
  mongoose.connect( url, { user, pass } );
  mongoose.connection.on('error', console.log );
  mongoose.connection.on('connected', () => { console.log('Connected') } );
}