var cron = require('node-cron');
const { videoMining } = require('../Services/youtubeService');
const dbServices = require('./dbService');

cron.schedule('* */2 * * * *', async () => {
    console.log('running a task every two minutes');

    // // fetching videos every two minutes
    // const response = await videoMining();
    // console.log(response.length);

    // // storing the fetched videos in db
    // response.forEach(element => {
    //     try {
    //         dbServices.insertService(element)
    //     } catch (error) {
    //      console.log(error);   
    //     }
    // });
});
