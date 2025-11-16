const config = {
    secret: '9238fSf9fAKckj332Knaksnf9012ADSN',
    env: process.env.ENV,
    port: 3000,
    db: {
        dbUrl: process.env.DB_URL || 'mongodb://127.0.0.1:27017',
        dbName: process.env.DB_NAME || 'diploma',
        dbHost: process.env.DB_HOST || 'localhost',
        dbPort: process.env.DB_PORT || 27017,
    },
    userCommentActions: {
        like: 'like',
        dislike: 'dislike',
        violate: 'violate',
    },
    requestTypes: {
        order: 'order',
        consultation: 'consultation',
    }
};

module.exports = config;