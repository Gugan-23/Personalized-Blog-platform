import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = 'mongodb+srv://rubansendhur78409:mRo68Rmw2NI01pdV@test.uuu1d.mongodb.net/';
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;