const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_STICKER', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
    { key: 'ALLWAYS_OFFLINE', value: 'false' },
    { key: 'READ_MESSAGE', value: 'false' },
    { key: 'ANTI_LINK', value: 'false' },
    { key: 'ANTI_LINKK', value: 'false' },
    { key: 'AUTO_REACT', value: 'false' },
    { key: 'ANTI_BOT', value: 'false' },
    { key: 'ANTI_BAD', value: 'false' },
    { key: 'AUTO_STATUS_REPLY', value: 'false' },
    { key: 'AUTO_STATUS_MSG', value: '*𝙃𝙄👋.. SANIJA-𝐌𝐃 𝗔𝗨𝗧𝗢 𝗦𝗘𝗘𝗡 𝗬𝗢𝗨𝗥 🆂🆃🅰🆃🆄🆂*' },
    { key: 'AUTO_REACT_STATUS', value: 'true' }
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://rafama4631:fXX1CtlsNX8lONRc@manudb.oygo33i.mongodb.net/sula-md?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
