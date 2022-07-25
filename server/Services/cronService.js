var cron = require('node-cron');
const { videoMining } = require('../Services/youtubeService');
const dbServices = require('./dbService');

cron.schedule('*/155 * * * * *', async () => {
    console.log('running a task every two second');
    // const response = await videoMining();
    // console.log(response.length);
    // response.forEach(element => {
    //     try {
    //         dbServices.insertService(element)
    //     } catch (error) {
    //      console.log(error);   
    //     }
    // });
});
