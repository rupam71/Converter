const redis = require('redis');

let client;
client = redis.createClient();
client.on("error", (error) => console.error(`Error : ${error}`));
client.connect().then(res=>console.log('sucess'))

// let redisClient;
// redisClient = redis.createClient();
// redisClient.on("error", (error) => console.error(`Error : ${error}`));
// redisClient.connect();

module.exports = client;