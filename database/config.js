//instalar el paquete mongoose npm i mongoose npm i mongoose
//crear carpeta database y dentro config.js
//crear en la carpeta de models usuario.js
const mongoose = require('mongoose');
const dbConnection = async () => {
    
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de dato');
    }
}
module.exports = {
    dbConnection
}