// dbService -  to handle the database operations

const mongoose = require('mongoose');

const VideoSch = mongoose.model('Videos');

// insert/store fetched data into db
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

// find one video by id from db
const findOneService = async (videoId) => {
    try {
        const findAVideo = await VideoSch.findOne({ videoId: videoId });
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

// find all videos that are stored in db
const findAllService = async (page, limit) => {
    try {
        const skipIndex = (page - 1) * limit;
        const paginatedResult = await VideoSch.find()
            .sort({ publishedAt: -1 })
            .limit(limit)
            .skip(skipIndex)
            .exec();

        const totalCount = await countData();
        return {
            data: paginatedResult,
            page: page ? page : 1,
            pageSize: limit ? limit : totalCount,
            count: limit ? limit : totalCount,
            totalCount: totalCount
        };

    } catch (error) {
        console.log(error);
        return {
            status: "failure",
            msg: `error occured while finding videos : ${error}`
        }
    }
};

// find videos with matching title or description from db
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

        const totalCount = await VideoSch.count({
            $or: [
                { "videoTitle": { $regex: new RegExp(searchString, "i") } },
                { "videoDescription": { $regex: new RegExp(searchString, "i") } },
            ]
        });
        return {
            data: paginatedResult,
            page: page ? page : 1,
            pageSize: limit ? limit : totalCount,
            count: paginatedResult ? paginatedResult.length : totalCount,
            totalCount: totalCount
        };

    } catch (error) {
        console.log(error);
        return {
            status: "failure",
            msg: `error occured while finding videos : ${error}`
        }
    }
};

// get count of number of records in the db
const countData = async () => {
    try {
        const totalCount = await VideoSch.count();
        return totalCount;

    } catch (error) {
        console.log(error);
        return {
            status: "failure",
            msg: `error occured while counting videos : ${error}`
        }
    }
};

module.exports = {
    insertService,
    findAllService,
    findByNameService
}
