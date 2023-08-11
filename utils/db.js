const mongoose = require('mongoose');

async function connectToMongoDB() {
    mongoose.set("strictQuery", false);
    const mongoDB = process.env.MONGODB_URL;
    try {
        await mongoose.connect(mongoDB);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    }
}

module.exports = connectToMongoDB;