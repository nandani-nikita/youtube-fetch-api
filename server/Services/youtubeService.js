var { google } = require('googleapis');
const dotenv =require("dotenv");
dotenv.config({path:'./.env'});
var youtube = google.youtube({
    version: 'v3',
    auth: process.env.API_KEY
});

async function videoMining() {
    try {
        const response = await youtube.search.list({
            part: 'snippet',
            q: 'how to make tea',
            order: "date",
            type: "video",
            publishedAfter: "2022-07-22T01:59:53Z",
            maxResults: 5
        });

        return response.data.items;
    } catch (error) {
        console.log(error);
        return false;
    }
}
module.exports = { videoMining }