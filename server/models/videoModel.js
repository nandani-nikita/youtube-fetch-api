const mongoose = require('mongoose');

var videoSchema = new mongoose.Schema({
    videoId: { type: String },
    videoTitle: { type: String, index: true },
    publishedAt: { type: Date },
    videoDescription: { type: String, index: true },
    thumbnailUrl: { type: Object },
    channelId: { type: String },
    channelTitle: { type: String }
}, { collection: 'youtubeVideos' });

// mongoose.model('Videos', videoSchema);
videoSchema.index({ title: 'text', description: 'text', tags: 'text' });
const Vdo = mongoose.model('Videos', videoSchema);
Vdo.createIndexes();