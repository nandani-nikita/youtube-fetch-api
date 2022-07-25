const mongoose = require('mongoose');

// defining data-save schema
var videoSchema = new mongoose.Schema({
    videoId: { type: String },
    videoTitle: { type: String, index: true },
    publishedAt: { type: Date },
    videoDescription: { type: String, index: true },
    thumbnailUrl: { type: Object },
    channelId: { type: String },
    channelTitle: { type: String }
}, { collection: 'youtubeVideos' });


// creating title and description of video as indexes for faster search
videoSchema.index({ title: 'text', description: 'text', tags: 'text' });
const Vdo = mongoose.model('Videos', videoSchema);
Vdo.createIndexes();