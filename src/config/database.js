import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://isabellaariza7:1234@cluster0.ofsvfqu.mongodb.net/api_tiquetera?retryWrites=true&w=majority&appName=Cluster0",{
            // useNewUrlParser: true, //Nuevo parser de URL  de Mongodb
            // useUnifiedTopology: true // Nuevo motor de monitoreo de servidores
        });
        console.log("Conectado a la base de datos");
    } catch (error) {   
        console.log("Error de conexion",error);
        process.exit(1);//finaliza la ejecución si falla la connexión
    }
};

export default connectDB