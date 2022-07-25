const mongoose = require('mongoose');

const VideoSch = mongoose.model('Videos');

const insertService = async (data) => {
    try {
        const checkExistingVideo = await findOneService(data.id.videoId);
        // console.log(checkExistingVideo);
        if (!checkExistingVideo) {
            console.log("Video doesn't exists. Adding...");
            const video = new VideoSch({
                videoId: data.id.videoId,
                videoTitle: data.snippet.title,
                publishedAt: data.snippet.publishedAt,
                videoDescription: data.snippet.description,
                thumbnailUrl: { ...data.snippet.thumbnails },
                channelId: data.snippet.channelId,
                channelTitle: data.snippet.channelTitle
            });
            await video.save();
            return {
                status: "success",
                msg: "Video saved"
            }
        }

    } catch (error) {
        console.log(error);
        return {
            status: "failure",
            msg: `error occured while saving video : ${error}`
        }
    }
};

const findOneService = async (videoId) => {
    try {

        const findAVideo = await VideoSch.findOne({ videoId: videoId });
        // console.log(resp);
        if (findAVideo) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return {
            status: "failure",
            msg: `error occured while finding videos : ${error}`
        }
    }
};


const findAllService = async (page, limit) => {
    try {
        const skipIndex = (page - 1) * limit;
        const paginatedResult = await VideoSch.find()
            .sort({ publishedAt: -1 })
            .limit(limit)
            .skip(skipIndex)
            .exec();

        return paginatedResult;

    } catch (error) {
        console.log(error);
        return {
            status: "failure",
            msg: `error occured while finding videos : ${error}`
        }
    }
};


const findByNameService = async (searchString, page, limit) => {
    try {
        const skipIndex = (page - 1) * limit;
        const paginatedResult = await VideoSch.find({
            $or: [
                { "videoTitle": { $regex: new RegExp(searchString, "i") } },
                { "videoDescription": { $regex: new RegExp(searchString, "i") } },
            ]
        })
            .sort({ publishedAt: -1 })
            .limit(limit)
            .skip(skipIndex)
            .exec();

        return paginatedResult;

    } catch (error) {
        console.log(error);
        return {
            status: "failure",
            msg: `error occured while finding videos : ${error}`
        }
    }
};

module.exports = {
    insertService,
    findAllService,
    findByNameService
}
