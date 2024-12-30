// require('dotenv').config({path: './src/config/.env'})
require('dotenv').config({ path: '../../config/.env' });
module.exports ={
    client: 'pg',
    migrations:{
        directory: '../../migrations',
         
    },

    connection:{
        host:process.env.DB_HOST,
        user:process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        datbase: process.env.DB_NAME,
 
        
    }
    
};
